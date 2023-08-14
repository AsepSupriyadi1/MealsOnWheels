package com.summative.mealsonwheels.Controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import com.summative.mealsonwheels.Dto.EntityRequest.AddMealsRequest;
import com.summative.mealsonwheels.Dto.EntityResponse.AssignUser;
import com.summative.mealsonwheels.Entity.*;
import com.summative.mealsonwheels.Repositories.*;
import com.summative.mealsonwheels.Services.*;
import jakarta.servlet.http.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.summative.mealsonwheels.Dto.EntityRequest.AssignRequest;
import com.summative.mealsonwheels.Dto.EntityResponse.DriverAvailableResponse;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.UserApproval;
import com.summative.mealsonwheels.Dto.EntityResponse.UserRoleDetails;
import com.summative.mealsonwheels.Entity.constrant.UserRole;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private UserAppService userAppService;

    @Autowired
    private UserAppRepository userAppRepository;

    @Autowired
    private PartnerRepository partnerRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private OrderServices orderServices;

    @Autowired
    private UserAppDetailService userAppDetailService;

    @Autowired
    private FundServices fundServices;


    @Autowired
    private PictureRepository pictureRepository;


    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UserAppDetailsRepository userAppDetailsRepository;


    @PostMapping("/add-meals")
    public MessageResponse addMeals(AddMealsRequest mealsRequest) throws IOException {
        MessageResponse response = new MessageResponse();

        Picture picture = new Picture();
        picture.setImageName(mealsRequest.getPicture().getOriginalFilename());
        picture.setImageData(mealsRequest.getPicture().getBytes());

        Meals meals = new Meals();
        meals.setPicture(picture);
        meals.setMealsName(mealsRequest.getMealsName());
        meals.setStock(mealsRequest.getStock());

        mealsServices.addMeals(meals);
        response.setMessage("Meals added successfully");
        return response;
    }


    @GetMapping("/all-meals")
    public List<Meals> allMeals() {
        return mealsServices.getAllMeals();
    }


    @GetMapping("/all-inactive-users")
    public List<UserApproval> getAllInactiveUsers() {


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
    public List<Order> getAllOders() {
        return orderServices.getAllOrders();
    }


    @PostMapping("/order/assign")
    public ResponseEntity<MessageResponse> assignOrder(@RequestBody AssignRequest assignRequest) {
       try {
           orderServices.assignPartner(assignRequest);
       } catch (Exception e){
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new MessageResponse(e.getMessage()));
       }
       return ResponseEntity.ok(new MessageResponse("Order assign to partner and driver"));
    }


    // ACTIVATE USER BY THE ID
    @GetMapping("/user/activate/{userId}")
    public MessageResponse activateUser(@PathVariable Long userId) {
        UserApp user = userAppService.findUserById(userId);
        userAppService.activateUser(user);
        return new MessageResponse("User Activated Successfully");
    }


    // GET USERS DETAILS BY USER ID
    @GetMapping("/users-details/{userId}")
    public ResponseEntity<?> getUserDetails(@PathVariable(name = "userId") Long userId) {
        UserApp user = userAppService.findUserById(userId);
        UserRoleDetails<Object> userRoleDetails =  userAppDetailService.getUserRoleDetails(user);;
        return ResponseEntity.ok(userRoleDetails);
    }


    @GetMapping("/all-available-driver")
    public ResponseEntity<List<DriverAvailableResponse>> getAllAvailableDriver() {

        List<DriverAvailableResponse> allDriver = new ArrayList<>();

        driverRepository.getAllAvailableDriver().forEach(x -> allDriver.add(
                DriverAvailableResponse.builder()
                        .driverId(x.getDriverId())
                        .driverName(x.getUserDetails().getFullname())
                        .userId(x.getUserDetails().getUserDetailsId())
                        .build()
        ));


        return ResponseEntity.ok(allDriver);
    }


    @GetMapping("/all-active-driver")
    public ResponseEntity<List<UserRoleDetails<Driver>>> getAllActiveDriver() {

        List<UserRoleDetails<Driver>> allDriver = new ArrayList<>();

        userAppService.findAllActiveUsers(UserRole.DRIVER).forEach(userApp -> {
            UserRoleDetails<Driver> driverDetails = UserRoleDetails.<Driver>builder()
                    .fullname(userApp.getUserDetails().getFullname())
                    .email(userApp.getEmail())
                    .role(userApp.getUserRole().name())
                    .address(userApp.getUserDetails().getUserAppAddress().getLabel())
                    .roleDetails(userApp.getUserDetails().getDriver())
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
                    .address(userApp.getUserDetails().getUserAppAddress().getLabel())
                    .roleDetails(userApp.getUserDetails().getPartner())
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
                    .address(userApp.getUserDetails().getUserAppAddress().getLabel())
                    .roleDetails(userApp.getUserDetails().getMember())
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
                    .address(userApp.getUserDetails().getUserAppAddress().getLabel())
                    .roleDetails(userApp.getUserDetails().getVolunteer())
                    .build();
            allVolunteer.add(volunteerDetails);
        });

        return ResponseEntity.ok(allVolunteer);
    }


    @GetMapping("/count-active-role")
    public ResponseEntity<HashMap<String, Long>> countAllActiveUserRole() {


        HashMap<String, Long> listCount = new HashMap<String, Long>();

        listCount.put("totalActiveDriver", driverRepository.countActiveDriver());
        listCount.put("totalActivePartner", partnerRepository.countActivePartner());
        listCount.put("totalActiveMember", memberRepository.countActiveMember());
        listCount.put("totalActiveVolunteer", volunteerRepository.countActiveVolunteer());


        return ResponseEntity.ok(listCount);

    }


    @GetMapping("/all-drivers")
    public ResponseEntity<List<AssignUser>> getMowDriver() {
        List<AssignUser> allDriver = userAppService.getAllAvailableDriver();
        return ResponseEntity.ok(allDriver);
    }

    @GetMapping("/all-kitchens")
    public ResponseEntity<List<AssignUser>> getMowPartner() {
        List<AssignUser> allKitchen = userAppService.getAllAvailableKitchen();
        return ResponseEntity.ok(allKitchen);
    }

    @GetMapping("/all-donations")
    public ResponseEntity<List<Funds>> getAllFunds() {
        List<Funds> fundsList = fundServices.getAllFunds();
        return ResponseEntity.ok(fundsList);
    }

    @GetMapping("/total-donations")
    public ResponseEntity<String> getTotalFunds() {
        Double totalFunds;
        try {
            totalFunds =  fundServices.getTotalFunds();
        } catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
        return ResponseEntity.ok(Double.toString(totalFunds));
    }

    @GetMapping("/order/feedback/{orderId}")
    public ResponseEntity<?> getOrderFeedback(@PathVariable(name = "orderId") Long orderId) {
        Order order = orderServices.findOrderById(orderId);
        return ResponseEntity.ok(order);
    }


}
