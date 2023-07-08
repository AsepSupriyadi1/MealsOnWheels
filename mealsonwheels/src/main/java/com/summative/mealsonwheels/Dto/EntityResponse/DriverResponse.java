package com.summative.mealsonwheels.Dto.EntityResponse;

import com.summative.mealsonwheels.Entity.DriverStatus;
import com.summative.mealsonwheels.Entity.UserRole;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class DriverResponse {
    
    private Long driverId;
    private Long userId;
    private String fullname;
    private String email;
    private String address;
    private UserRole userRole;
    private DriverStatus driverStatus;
    private String car;
    // private boolean haveLicense;
    
}
