package com.summative.mealsonwheels.Dto.EntityRequest;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackRequest {
    
    private Long orderId;
    private String feedback;

}
