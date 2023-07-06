package com.summative.mealsonwheels.Dto;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import lombok.Data;



@Data
public class RegisterRequest {
    
    private UserApp userApp;
    private Partner partner;
    private Driver driver;
    
}
