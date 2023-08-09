package com.summative.mealsonwheels.Dto;


import com.summative.mealsonwheels.Entity.Picture;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailDto {

    private String fullName;
    private String phoneNumber;
    private MultipartFile picture;
    private String address;

}
