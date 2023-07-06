package com.summative.mealsonwheels.Dto;

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


  
}
