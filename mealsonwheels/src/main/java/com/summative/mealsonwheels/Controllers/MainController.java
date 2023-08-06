package com.summative.mealsonwheels.Controllers;

import com.summative.mealsonwheels.Dto.EntityRequest.UserAppDetailsDto;
import com.summative.mealsonwheels.Dto.ResponseData;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;
import com.summative.mealsonwheels.Repositories.MemberRepository;
import com.summative.mealsonwheels.Repositories.UserAppDetailsRepository;
import com.summative.mealsonwheels.Repositories.UserAppRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.PartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.summative.mealsonwheels.Services.UserAppService;


@RestController
@RequestMapping("/api/v1/main")
public class MainController {
    

    @Autowired
    private UserAppService userAppService;

    @Autowired
    private UserAppRepository userAppRepository;

    @Autowired
    private PartnerService partnerService;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UserAppDetailsRepository userDetailsRepository;


     @GetMapping("/profile")
     public UserAppDetails getCurrentUser(){
         return userAppService.getCurrentUser().getUserDetails();
     }


//    @PutMapping("/updateProfile")
//    public UserAppDetails updateProfile(@RequestBody UserAppDetailsDto request){
//
//
//        ResponseData<UserAppDetailsDto> responseData = new ResponseData<>();
//
//        try {
//            // Cek apakah email sudah digunakan oleh pengguna lain
//            boolean existingUser = userAppRepository.findByEmail(request.getUserApp().getEmail()).isPresent();
//            if (existingUser) {
//                throw new IllegalArgumentException("Email already exists");
//            }
//
//            String userRole = request.getUserApp().getUserRole().name();
//
//            if (request.getUserDetails() == null) {
//                throw new IllegalArgumentException("User details not provided");
//            }
//
//            // CHECK IF THE REGISTERED USER IS MEMBER / DONOR then activate the account
//            if (userRole.equals("DONOR")) {
//                request.getUserApp().setActive(true);
//            }
//
//            // SAVE THE USERS
//            UserApp user = request.getUserApp();
//            user.setPassword(request.getUserApp().getPassword());
//            userAppService.save(request.getUserApp());
//
//            // SAVE THE USER DETAILS
//            UserAppDetails details = request.getUserDetails();
//            details.setUser(request.getUserApp());
//            userDetailsRepository.save(details);
//
//            // CHECK IF THE REGISTERED NO ENTERING THE ROLE DETAILS
//            if (
//                    userRole.equals("PARTNER") &&  request.getPartner() == null  ||
//                            userRole.equals("VOLUNTEER") &&  request.getVolunteer() == null  ||
//                            userRole.equals("DRIVER") &&  request.getDriver() == null  ||
//                            userRole.equals("MEMBER") &&  request.getMember() == null
//            ) {
//                throw new IllegalArgumentException("User Role details not provided");
//            }
//
//            // CHECK IF THE REGISTERED USER IS PARTNER
//            if (userRole.equals("PARTNER")) {
//                request.getPartner().setUserDetails(request.getUserDetails());
//                partnerService.save(request.getPartner());
//            }
//
//            // CHECK IF THE REGISTERED USER IS DRIVER
//            if (userRole.equals("DRIVER")) {
//                request.getDriver().setUserDetails(request.getUserDetails());
//                request.getDriver().setDriverStatus(DriverStatus.AVAILABLE);
//                driverServices.save(request.getDriver());
//            }
//
//            // CHECK IF THE REGISTERED USER IS MEMBER
//            if (userRole.equals("MEMBER")) {
//                request.getMember().setUserDetails(request.getUserDetails());
//                memberRepository.save(request.getMember());
//            }
//
//            // CHECK IF THE REGISTERED USER IS VOLUNTEER
//            if (userRole.equals("VOLUNTEER")) {
//                request.getVolunteer().setUserDetails(request.getUserDetails());
//                volunteerRepository.save(request.getVolunteer());
//            }
//
//            responseData.setPayload(request);
//            responseData.setMessages("User Registered Successfully!");
//            responseData.setStatus(true);
//            return ResponseEntity.ok(responseData);
//
//        } catch (Exception e) {
//            responseData.setStatus(false);
//            responseData.setMessages(e.getMessage());
//            responseData.setPayload(null);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseData);
//        }
//
//        return userAppService.getCurrentUser().getUserDetails();
//    }


}
