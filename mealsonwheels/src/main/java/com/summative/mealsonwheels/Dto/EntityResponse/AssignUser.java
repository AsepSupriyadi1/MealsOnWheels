package com.summative.mealsonwheels.Dto.EntityResponse;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AssignUser {

    Long userId;
    String userName;
    String volunteerStatus;
    String driverStatus;
    double distance;

}
