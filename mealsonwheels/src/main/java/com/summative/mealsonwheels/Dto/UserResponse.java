package com.summative.mealsonwheels.Dto;

import com.summative.mealsonwheels.Entity.Picture;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {


  private Long userId;
  private String email;
  private String fullname;
  private String address;
  private String userRole;
  private String pictureData;
  private String phoneNumber;
  private double lan;
  private double lng;


  
}
