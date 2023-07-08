package com.summative.mealsonwheels.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.DriverResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.PartnerResponse;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.UserApp;
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


    // ACTIVATE USER BY THE ID
    @GetMapping("/user/activate/{userId}")
    public MessageResponse activateUser(@PathVariable Long userId){

        UserApp user = userAppService.findUserById(userId);
        user.setActive(true);
        userAppService.update(user);

        MessageResponse response = new MessageResponse("User Activated Successfully");

        return response;

    }






    @GetMapping("/all-users")
    public List<UserApp> getAllUsers(){
        return userAppService.getAllUsers();
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

    // -=-=-=-=-=-= MANAGE PARTNER -=-=-=-=-=
    @GetMapping("/all-partner")
    public List<PartnerResponse> getAllPartner(){

        List<PartnerResponse> listPartners = new ArrayList<PartnerResponse>();

        partnerService.getAllActivePartners().forEach(x -> listPartners.add(
            PartnerResponse.builder()
            .partnerId(x.getPartnerId())
            .userId(x.getUser().getUserId())
            .fullname(x.getUser().getFullname())
            .email(x.getUser().getEmail())
            .address(x.getUser().getAddress())
            .partnerStatus(x.getPartnerStatus())
            .companyName(x.getCompanyName())
            .companyAddress(x.getCompanyAddress())
            .build()
        ));


        return listPartners;

       
    }



    
    @GetMapping("/all-partner-request")
    public List<PartnerResponse> getAllNotActivePartner(){
        List<PartnerResponse> listPartners = new ArrayList<PartnerResponse>();

        partnerService.getAllNonActivePartners().forEach(x -> listPartners.add(
            PartnerResponse.builder()
            .partnerId(x.getPartnerId())
            .userId(x.getUser().getUserId())
            .fullname(x.getUser().getFullname())
            .email(x.getUser().getEmail())
            .address(x.getUser().getAddress())
            .companyName(x.getCompanyName())
            .companyAddress(x.getCompanyAddress())
            .build()
        ));


        return listPartners;
    }


    // -=-=-=-=-=-= MANAGE DRIVER -=-=-=-=-=
    @GetMapping("/all-driver")
    public List<DriverResponse> getAllDrivers(){
        List<DriverResponse> listDrivers = new ArrayList<DriverResponse>();

        driverServices.getAllActiveDrivers().forEach(x -> listDrivers.add(
            DriverResponse.builder()
            .driverId(x.getDriverId())
            .userId(x.getUser().getUserId())
            .fullname(x.getUser().getFullname())
            .email(x.getUser().getEmail())
            .address(x.getUser().getAddress())
            .car(x.getCarName())
            .driverStatus(x.getDriverStatus())
            .build()
        ));


        return listDrivers;

    }


    @GetMapping("/all-driver-request")
    public List<DriverResponse> getAllRequestDrivers(){
        List<DriverResponse> listDrivers = new ArrayList<DriverResponse>();

        driverServices.getAllNonActiveDrivers().forEach(x -> listDrivers.add(
            DriverResponse.builder()
            .driverId(x.getDriverId())
            .userId(x.getUser().getUserId())
            .fullname(x.getUser().getFullname())
            .email(x.getUser().getEmail())
            .address(x.getUser().getAddress())
            .car(x.getCarName())
            .build()
        ));


        return listDrivers;

    }



    @GetMapping("/admin")
    public String test(){
    
        return "bjrrrr";

    }


}
