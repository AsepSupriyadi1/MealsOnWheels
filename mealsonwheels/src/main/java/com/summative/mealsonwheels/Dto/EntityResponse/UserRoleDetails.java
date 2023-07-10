package com.summative.mealsonwheels.Dto.EntityResponse;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRoleDetails<T> {
    private String username;
    private T details;
}
