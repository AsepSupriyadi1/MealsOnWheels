package com.summative.mealsonwheels.Controllers;

import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Services.UserAppService;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.EntityRequest.FundRequest;
import com.summative.mealsonwheels.Entity.Funds;
import com.summative.mealsonwheels.Services.FundServices;

@RestController
@RequestMapping("/api/v1/donor")
public class FundController {

    @Autowired
    private FundServices fundServices;

    @Autowired
    private UserAppService userAppService;


    @PostMapping("/fund")
    public ResponseEntity<MessageResponse> saveFunds(Double donorAmount) {

        UserApp userApp = userAppService.getCurrentUser();
        Funds funds = new Funds();


        funds.setDonorAmount(donorAmount);
        funds.setDateTime(new Date());
        funds.setUserDetails(userApp.getUserDetails());
        fundServices.saveFunds(funds);

        return ResponseEntity.ok(new MessageResponse("Donation sends successfully"));
    }

}
