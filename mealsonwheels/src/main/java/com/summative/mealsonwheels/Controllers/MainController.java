package com.summative.mealsonwheels.Controllers;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.summative.mealsonwheels.Dto.AssignRequest;
import com.summative.mealsonwheels.Dto.DriverAvailableResponse;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.EntityResponse.UserApproval;
import com.summative.mealsonwheels.Dto.EntityResponse.UserRoleDetails;
import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserRole;
import com.summative.mealsonwheels.Entity.Volunteer;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Repositories.DriverRepository;
import com.summative.mealsonwheels.Repositories.PartnerRepository;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
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
