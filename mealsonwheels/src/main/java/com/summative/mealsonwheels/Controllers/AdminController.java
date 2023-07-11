package com.summative.mealsonwheels.Controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.UserApproval;
import com.summative.mealsonwheels.Dto.EntityResponse.UserRoleDetails;
import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.UserRole;
import com.summative.mealsonwheels.Entity.Volunteer;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Repositories.DriverRepository;
import com.summative.mealsonwheels.Repositories.MemberRepository;
import com.summative.mealsonwheels.Repositories.PartnerRepository;
import com.summative.mealsonwheels.Repositories.UserAppDetailsRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
import com.summative.mealsonwheels.Services.UserAppService;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    
    @Autowired
    private UserAppService userAppService;

    @Autowired
    private PartnerRepository partnerRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private MemberRepository memberRepo;

    @Autowired
    private UserAppDetailsRepository userAppDetailsRepository;


    @Autowired
    private VolunteerRepository volunteerRepo;


    @Autowired
    private OrderServices orderServices;

    
    @PostMapping("/add-meals")
    public MessageResponse addMeals(@RequestBody Meals meal){
        mealsServices.addMeals(meal);
        return new MessageResponse("success add menu with name: "+ meal.getMealsName());
    }

    @GetMapping("/all-meals")
    public List<Meals> allMeals(){
        return mealsServices.getAllMeals();
    }



    @GetMapping("/all-inactive-users")
    public List<UserApproval> getAllInactiveUsers(){


        List<UserApproval> listUsers = new ArrayList<UserApproval>();
        
        
         userAppService.getAllInactiveUser().forEach(x -> listUsers.add(
            UserApproval.builder()
            .userId(x.getUserId())
            .fullname(x.getUserDetails().getFullname())
            .email(x.getUsername())
            .userRole(x.getUserRole().name())
            .build()
        ));

        return listUsers;

    }




    @GetMapping("/all-orders")
    public List<Order> getAllOders(){
       return orderServices.getAllOrders();
    }


    @GetMapping("/order/{orderId}/prepare/{partnerId}")
    public MessageResponse assignDriver(@PathVariable("orderId") Long orderId, @PathVariable("partnerId") Long partnerId){

        Order order = orderServices.findOrderById(orderId);
        Partner partner = partnerRepository.findById(partnerId).get();
        order.setPartner(partner);
        order.setUpdated_at(new Date());
    
        orderServices.save(order);

        return new MessageResponse(String.format("Order %d assign to partner %d", orderId, partnerId));

    }



    @GetMapping("/order/{orderId}/deliver/{driverId}")
    public MessageResponse assignPartner(@PathVariable("orderId") Long orderId, @PathVariable("driverId") Long driverId){

        Order order = orderServices.findOrderById(orderId);
        Driver driver = driverRepository.findById(driverId).get();
        order.setDriver(driver);
        order.setUpdated_at(new Date());

        orderServices.save(order);

        return new MessageResponse(String.format("Order %d assign to partner %d", orderId, driverId));

    }










    // ACTIVATE USER BY THE ID
    @GetMapping("/user/activate/{userId}")
    public MessageResponse activateUser(@PathVariable Long userId){

        UserApp user = userAppService.findUserById(userId);
        user.setActive(true);
        userAppService.update(user);

        MessageResponse response = new MessageResponse("User Activated Successfully");

        return response;

    }


    // GET USERS DETAILS BY USER ID
    @GetMapping("/users-details/{userId}")
    public ResponseEntity<?> getUserDetails(@PathVariable(name = "userId") Long userId){


        UserApp user = userAppService.findUserById(userId);
        UserRoleDetails<Object> userRoleDetails = new UserRoleDetails<Object>();
        

        String role = user.getUserRole().name(); 

        if(role.equals("DRIVER")){
            userRoleDetails.setRoleDetails(user.getDriver());
        } else if (role.equals("PARTNER")){
           userRoleDetails.setRoleDetails(user.getPartner());
        } else if (role.equals("MEMBER")){
            userRoleDetails.setRoleDetails(user.getMember());
        } else if (role.equals("VOLUNTEER")){
            userRoleDetails.setRoleDetails(user.getVolunteer());
        } 

        userRoleDetails.setRole(user.getUserRole().name());
        userRoleDetails.setAddress(user.getUserDetails().getAddress());
        userRoleDetails.setEmail(user.getUserDetails().getAddress());
        userRoleDetails.setFullname(user.getUserDetails().getFullname());


        return ResponseEntity.ok(userRoleDetails);
    }





    @GetMapping("/all-active-driver")
    public ResponseEntity<List<UserRoleDetails<Driver>>> getAllActiveDriver() {
    
        List<UserRoleDetails<Driver>> allDriver = new ArrayList<>();
    
        userAppService.findAllActiveUsers(UserRole.DRIVER).forEach(userApp -> {
            UserRoleDetails<Driver> driverDetails = UserRoleDetails.<Driver>builder()
                    .fullname(userApp.getUserDetails().getFullname())
                    .email(userApp.getEmail())
                    .role(userApp.getUserRole().name())
                    .address(userApp.getUserDetails().getAddress())
                    .roleDetails(userApp.getDriver())
                    .build();
            allDriver.add(driverDetails);
        });
    
        return ResponseEntity.ok(allDriver);
    }


    @GetMapping("/all-active-partner")
    public ResponseEntity<List<UserRoleDetails<Partner>>> getAllActivePartner() {
    
        List<UserRoleDetails<Partner>> allPartner = new ArrayList<>();
    
        userAppService.findAllActiveUsers(UserRole.PARTNER).forEach(userApp -> {
            UserRoleDetails<Partner> partnerDetails = UserRoleDetails.<Partner>builder()
                    .fullname(userApp.getUserDetails().getFullname())
                    .email(userApp.getEmail())
                    .role(userApp.getUserRole().name())
                    .address(userApp.getUserDetails().getAddress())
                    .roleDetails(userApp.getPartner())
                    .build();
            allPartner.add(partnerDetails);
        });
    
        return ResponseEntity.ok(allPartner);
    }
    


    @GetMapping("/all-active-member")
    public ResponseEntity<List<UserRoleDetails<Member>>> getAllActiveMember() {
    
        List<UserRoleDetails<Member>> allMember = new ArrayList<>();
    
        userAppService.findAllActiveUsers(UserRole.MEMBER).forEach(userApp -> {
            UserRoleDetails<Member> memberDetails = UserRoleDetails.<Member>builder()
                    .fullname(userApp.getUserDetails().getFullname())
                    .email(userApp.getEmail())
                    .role(userApp.getUserRole().name())
                    .address(userApp.getUserDetails().getAddress())
                    .roleDetails(userApp.getMember())
                    .build();
            allMember.add(memberDetails);
        });
    
        return ResponseEntity.ok(allMember);
    }


    @GetMapping("/all-active-volunteer")
    public ResponseEntity<List<UserRoleDetails<Volunteer>>> getAllActiveVolunteer() {
    
        List<UserRoleDetails<Volunteer>> allVolunteer = new ArrayList<>();
    
        userAppService.findAllActiveUsers(UserRole.VOLUNTEER).forEach(userApp -> {
            UserRoleDetails<Volunteer> volunteerDetails = UserRoleDetails.<Volunteer>builder()
                    .fullname(userApp.getUserDetails().getFullname())
                    .email(userApp.getEmail())
                    .role(userApp.getUserRole().name())
                    .address(userApp.getUserDetails().getAddress())
                    .roleDetails(userApp.getVolunteer())
                    .build();
            allVolunteer.add(volunteerDetails);
        });
    
        return ResponseEntity.ok(allVolunteer);
    }



}
