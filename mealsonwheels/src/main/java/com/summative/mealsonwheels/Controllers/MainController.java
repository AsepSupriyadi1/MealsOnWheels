package com.summative.mealsonwheels.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.summative.mealsonwheels.Services.UserAppService;


@RestController
@RequestMapping("/api/v1/main")
public class MainController {
    

    @Autowired
    private UserAppService userAppService;


    // @GetMapping
    // public UserAppDetails getCurrentUser(){
        
    // }


}
