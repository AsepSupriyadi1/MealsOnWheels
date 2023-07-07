package com.summative.mealsonwheels.Repositories.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PartnerDto {
    private Long partnerId;
    private String companyName;
    private String companyAddress;
    private Long userId;
    private String fullname;

}
