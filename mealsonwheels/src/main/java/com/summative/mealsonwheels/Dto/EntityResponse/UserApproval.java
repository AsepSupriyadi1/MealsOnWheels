package com.summative.mealsonwheels.Dto.EntityResponse;

import java.util.Date;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserApproval {
    

    private Long userId;
    private String fullname;
    private String email;
    private String userRole;
    private Date registrationDate;

}
