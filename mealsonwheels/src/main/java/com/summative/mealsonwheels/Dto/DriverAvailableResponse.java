package com.summative.mealsonwheels.Dto;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DriverAvailableResponse {    
    private Long driverId;
    private String driverName;
}
