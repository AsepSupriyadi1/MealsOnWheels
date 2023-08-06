package com.summative.mealsonwheels.Dto.EntityRequest;

import com.summative.mealsonwheels.Entity.*;

import lombok.Data;



@Data
public class UserAppDetailsDto {
    
    private UserApp userApp;
    private UserAppDetails userDetails;
    private UserAppAddress address;
    private Partner partner;
    private Driver driver;
    private Member member;
    private Volunteer volunteer;

}
