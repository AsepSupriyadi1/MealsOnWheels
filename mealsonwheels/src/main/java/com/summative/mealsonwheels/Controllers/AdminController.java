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
import com.summative.mealsonwheels.Services.PartnerService;
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
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
import com.summative.mealsonwheels.Services.UserAppService;
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
        picture.setImageData(mealsRequest.getPicture().getBytes());
        picture.setImageName(mealsRequest.getPicture().getOriginalFilename());
        pictureRepository.save(picture);

        Meals meals = new Meals();
        meals.setMealsName(mealsRequest.getMealsName());
        meals.setPicture(picture);
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

        List<Order> orders = orderServices.getAllOrders();
        // orderServices.getAllOrders().forEach(order -> {
        //     OrderDto orderDto = OrderDto.builder()
        //             .orderId(order.getOrderId())
        //             .datetime(order.getDatetime())
        //             .updated_at(order.getUpdated_at())
        //             .orderStatus(order.getStatus().name())
        //             .feedback(order.getFeedback())
        //             .meals(order.getMeals())
        //             .partner(order.getPartner().getUser().getUserDetails())
        //             .driver(order.get.getUser().getUserDetails())
        //             .member(order.getPartner().getUser().getUserDetails())
        //             .build();
        //     orders.add(orderDto);
        // });

        return orders;
    }


    @PostMapping("/order/assign")
    public ResponseEntity<MessageResponse> assignOrder(@RequestBody AssignRequest assignRequest) {

        Order order = orderServices.findOrderById(assignRequest.getOrderId());
        UserAppDetails driver = userAppDetailsRepository.findById(assignRequest.getDriverId()).get();
        String driverRole = driver.getUser().getUserRole().name();

        UserAppDetails kitchen = userAppDetailsRepository.findById(assignRequest.getKitchenId()).get();
        String kitchenRole = kitchen.getUser().getUserRole().name();

        if (driverRole.equals("DRIVER") || driverRole.equals("VOLUNTEER")) {
            order.setDriver(driver);
        } else {
            System.out.println("Driver Not Found");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new MessageResponse("Driver Not Found"));
        }

        if (kitchenRole.equals("PARTNER") || kitchenRole.equals("VOLUNTEER")) {
            order.setPartner(kitchen);
        } else {
            System.out.println("Kitchen Not Found");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new MessageResponse("Kitchen Not Found"));
        }

        order.setFarFromPartner(assignRequest.getDistance() > 10d);
        order.setStatus(OrderStatus.ASSIGNED);
        order.setUpdated_at(new Date());

        if(order.isWeekEnd()){
            order.setFrozen(true);
        } else order.setFrozen(!order.isWeekEnd() && order.isFarFromPartner());

        order.setDistance(assignRequest.getDistance());
        orderServices.save(order);
        return ResponseEntity.ok(new MessageResponse("Order assign to partner and driver"));
    }


    // ACTIVATE USER BY THE ID
    @GetMapping("/user/activate/{userId}")
    public MessageResponse activateUser(@PathVariable Long userId) {

        UserApp user = userAppService.findUserById(userId);
        user.setActive(true);
        userAppService.update(user);

        MessageResponse response = new MessageResponse("User Activated Successfully");

        return response;

    }


    // GET USERS DETAILS BY USER ID
    @GetMapping("/users-details/{userId}")
    public ResponseEntity<?> getUserDetails(@PathVariable(name = "userId") Long userId) {


        UserApp user = userAppService.findUserById(userId);
        UserRoleDetails<Object> userRoleDetails = new UserRoleDetails<Object>();


        String role = user.getUserRole().name();

        if (role.equals("DRIVER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getDriver());
        } else if (role.equals("PARTNER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getPartner());
        } else if (role.equals("MEMBER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getMember());
        } else if (role.equals("VOLUNTEER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getVolunteer());
        }

        userRoleDetails.setRole(user.getUserRole().name());
        userRoleDetails.setAddress(user.getUserDetails().getUserAppAddress().getLabel());
        userRoleDetails.setEmail(user.getEmail());
        userRoleDetails.setFullname(user.getUserDetails().getFullname());


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

}
