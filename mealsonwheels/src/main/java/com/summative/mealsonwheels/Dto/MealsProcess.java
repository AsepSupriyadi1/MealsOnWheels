package com.summative.mealsonwheels.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealsProcess {

    Long orderId;
    String mealStatus;

}
