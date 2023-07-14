package com.summative.mealsonwheels.Dto.EntityRequest;


import com.summative.mealsonwheels.Entity.Meals;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddMealsRequest {

    private String mealsName;
    private Long partnerId;
    private Integer stock;
    private MultipartFile picture;

}
