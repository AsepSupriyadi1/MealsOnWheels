package com.summative.mealsonwheels.Dto;

import lombok.Data;


@Data
public class MessageResponse {
    
    private String message;


    public MessageResponse(String message){
        this.message = message;
    }

}
