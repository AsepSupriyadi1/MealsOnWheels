package com.summative.mealsonwheels.Dto.EntityResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailsResponse<T> {
    
    private String fullName;
    private String email;
    private T details;

}
