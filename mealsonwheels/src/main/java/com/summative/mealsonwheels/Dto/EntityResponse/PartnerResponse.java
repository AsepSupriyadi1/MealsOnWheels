package com.summative.mealsonwheels.Dto.EntityResponse;

import com.summative.mealsonwheels.Entity.PartnerStatus;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor
public class PartnerResponse {
    
    private Long partnerId;
    private Long userId;
    private String fullname;
    private String email;
    private String address;
    private PartnerStatus partnerStatus;
    private String companyName;
    private String companyAddress;

}
