package com.summative.mealsonwheels.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Repositories.Dto.PartnerDto;
import com.summative.mealsonwheels.Services.PartnerService;
import com.summative.mealsonwheels.Services.UserAppService;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    
    @Autowired
    private UserAppService userAppService;

    @Autowired
    private PartnerService partnerService;


    // ACTIVATE USER BY THE ID
    @GetMapping("/user/activate/{userId}")
    public MessageResponse activateUser(@PathVariable Long userId){

        UserApp user = userAppService.findUserById(userId);
        user.setActive(true);
        userAppService.update(user);

        MessageResponse response = new MessageResponse("User Activated Successfully");

        return response;

    }














    // -=-=-=-= GET ALL CONTROLLER START -=-=-=-=-=
    @GetMapping("/all-active-partner")
    public List<Partner> getAllActivePartner(){
        return partnerService.getAllActivePartners();
    }


    @GetMapping("/all-notactive-partner")
    public List<Partner> getAllNotActivePartner(){
        return partnerService.getAllNonActivePartners();
    }



    // -=-=-=-= GET ALL CONTROLLER END -=-=-=-=-=


}
