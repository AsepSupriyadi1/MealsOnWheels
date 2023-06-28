package com.summative.mow.Dto;

import com.summative.mow.Entity.Meals;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class MealsRequest {
    
    private String message;
    private String error;
    private Meals payload;

}
