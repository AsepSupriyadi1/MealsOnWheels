package com.summative.mealsonwheels.Dto;

import com.summative.mealsonwheels.Entity.Meals;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class MealsRequest {
    
    private String message;
    private String error;
    private Meals payload;

}
