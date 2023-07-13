package com.summative.mealsonwheels.Dto.EntityRequest;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.Volunteer;

import lombok.Data;



@Data
public class RegisterRequest {
    
    private UserApp userApp;
    private UserAppDetails userDetails;
    private Partner partner;
    private Driver driver;
    private Member member;
    private Volunteer volunteer;
    
}
