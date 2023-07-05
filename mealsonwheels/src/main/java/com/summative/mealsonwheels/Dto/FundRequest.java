package com.summative.mealsonwheels.Dto;
import lombok.Data;

@Data
public class FundRequest {
    
    // FUNDS INFORMATION
    private Long donorId;

    private String dateTime;
    private String donorAmount;


    // USER DETAILS
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private String status;


    // FOREIGN KEYS
    private Long user;


}
