package com.summative.mealsonwheels.Controllers;

import com.summative.mealsonwheels.Dto.EntityRequest.UserAppDetailsDto;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.ResponseData;
import com.summative.mealsonwheels.Dto.UserDetailDto;
import com.summative.mealsonwheels.Entity.Picture;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;
import com.summative.mealsonwheels.Repositories.MemberRepository;
import com.summative.mealsonwheels.Repositories.UserAppDetailsRepository;
import com.summative.mealsonwheels.Repositories.UserAppRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.PartnerService;
import com.summative.mealsonwheels.Services.UserAppDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.summative.mealsonwheels.Services.UserAppService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/api/v1/main")
public class MainController {


    @Autowired
    private UserAppService userAppService;

    @Autowired
    private UserAppRepository userAppRepository;

    @Autowired
    private PartnerService partnerService;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UserAppDetailsRepository userDetailsRepository;

    @Autowired
    private UserAppDetailService userAppDetailService;


    @PostMapping("/updateProfile")
    public ResponseEntity<MessageResponse> updateProfile(UserDetailDto userDetailDto) throws IOException {


        Picture picture = new Picture();
        if (userDetailDto.getPicture().getSize() != 0) {
            picture.setImageName(userDetailDto.getPicture().getOriginalFilename());
            picture.setImageData(userDetailDto.getPicture().getBytes());
        }

        try {
            userAppDetailService.updateProfile(userDetailDto, picture);
        } catch (Exception e) {
            return ResponseEntity.ok(new MessageResponse("Failed"));
        }

        return ResponseEntity.ok(new MessageResponse("Profile Updated Successfully"));

    }


}
