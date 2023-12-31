package com.summative.mealsonwheels.Dto.EntityRequest;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AssignRequest {
    private Long kitchenId;
    private Long driverId;
    private Long orderId;
    private double distance;
}
