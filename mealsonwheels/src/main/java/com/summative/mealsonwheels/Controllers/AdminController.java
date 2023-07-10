package com.summative.mealsonwheels.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.maps.DirectionsApi.Response;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.DriverResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.PartnerResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.UserApproval;
import com.summative.mealsonwheels.Dto.EntityResponse.UserDetailsResponse;
import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.Volunteer;
import com.summative.mealsonwheels.Repositories.MemberRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.PartnerService;
import com.summative.mealsonwheels.Services.UserAppService;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    
    @Autowired
    private UserAppService userAppService;

    @Autowired
    private PartnerService partnerService;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private MemberRepository memberRepo;

    @Autowired
    private VolunteerRepository volunteerRepo;


    // ACTIVATE USER BY THE ID
    @GetMapping("/user/activate/{userId}")
    public MessageResponse activateUser(@PathVariable Long userId){

        UserApp user = userAppService.findUserById(userId);
        user.setActive(true);
        userAppService.update(user);

        MessageResponse response = new MessageResponse("User Activated Successfully");

        return response;

    }




    @GetMapping("/all-inactive-users")
    public List<UserApproval> getAllInactiveUsers(){


        List<UserApproval> listUsers = new ArrayList<UserApproval>();
        
        
         userAppService.getAllInactiveUser().forEach(x -> listUsers.add(
            UserApproval.builder()
            .userId(x.getUserId())
            .fullname(x.getFullname())
            .email(x.getUsername())
            .userRole(x.getUserRole().name())
            .build()
        ));

        return listUsers;

    }

    
    @PostMapping("/add-meals")
    public MessageResponse addMeals(@RequestBody Meals meal){
        mealsServices.addMeals(meal);
        return new MessageResponse("success add menu with name: "+ meal.getMealsName());
    }

    @GetMapping("/all-meals")
    public List<Meals> allMeals(){
        return mealsServices.getAllMeals();
    }

    @GetMapping("/users-details/{userId}")
    public ResponseEntity<?> getUserDetails(@PathVariable(name = "userId") Long userId){

        UserApp user = userAppService.findUserById(userId);

        String role = user.getUserRole().name(); 

        if(role.equals("DRIVER")){
            Driver driver = driverServices.findDriverByUser(user);
            return ResponseEntity.ok(driver);
        } else if (role.equals("PARTNER")){
            Partner partner = partnerService.getPartnerByUser(user);
            return ResponseEntity.ok(partner);
        } else if (role.equals("MEMBER")){
            Member member = memberRepo.findMemberByUser(user).get();
            return ResponseEntity.ok(member);
        } else if (role.equals("VOLUNTEER")){
            Volunteer volunteer = volunteerRepo.findVolunteerByUser(user).get();
            return ResponseEntity.ok(volunteer);
        }

        return ResponseEntity.ok(user);
    }



    @GetMapping("/admin")
    public String test(){
    
        return "bjrrrr";

    }


}
