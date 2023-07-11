package com.summative.mealsonwheels.Dto.EntityResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRoleDetails<T> {
    private String fullname;
    private String email;
    private String address;
    private String role;
    private T roleDetails;
}
