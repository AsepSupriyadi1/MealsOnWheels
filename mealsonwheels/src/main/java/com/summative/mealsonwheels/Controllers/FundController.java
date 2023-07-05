package com.summative.mealsonwheels.Controllers;

import java.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.FundRequest;
import com.summative.mealsonwheels.Entity.Funds;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Services.FundServices;
import com.summative.mealsonwheels.Services.UserAppService;

@RestController
@RequestMapping("/api/v1/fund")
public class FundController {
    
    @Autowired
    private FundServices fundServices;

    private UserAppService userAppService;


    @PostMapping("/save")
    public Funds saveFunds(@RequestBody FundRequest fundsRequest){

        // UserApp user = userAppService.findUserById(fundsRequest.getUser());
        Funds funds = new Funds();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");    
        
        // DONOR DETAILS
        // funds.setUser(user);
        funds.setFirstName(fundsRequest.getFirstName());
        funds.setLastName(fundsRequest.getLastName());
        funds.setPhoneNumber(fundsRequest.getPhoneNumber());
        funds.setEmail(fundsRequest.getEmail());
        funds.setAddress(fundsRequest.getAddress());
        funds.setStatus(fundsRequest.getStatus());
        
        // DONOR INFORMATION
        funds.setDonorAmount(Double.parseDouble(fundsRequest.getDonorAmount()));
        funds.setDateTime(dtf.toString());

        return fundServices.saveFunds(funds);   
    }


}
