package com.summative.mealsonwheels.Services;

import com.summative.mealsonwheels.Dto.EntityResponse.UserRoleDetails;
import com.summative.mealsonwheels.Dto.UserDetailDto;
import com.summative.mealsonwheels.Entity.Picture;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppAddress;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Repositories.PictureRepository;
import com.summative.mealsonwheels.Repositories.UserAppAddressRepository;
import com.summative.mealsonwheels.Repositories.UserAppDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class UserAppDetailService {

    @Autowired
    private UserAppDetailsRepository userAppDetailsRepository;

    @Autowired
    private PictureRepository pictureRepository;

    @Autowired
    private UserAppAddressRepository userAppAddressRepository;

    @Autowired
    private UserAppService userAppService;


    public void updateProfile(UserDetailDto userDetailDto, Picture requestPicture) throws IOException {

        UserAppDetails userAppDetails = userAppService.getCurrentUser().getUserDetails();
        UserAppAddress userAppAddress = userAppDetails.getUserAppAddress();


        if (requestPicture.getImageData() != null) {

            requestPicture.setUserAppDetails(userAppDetails);

            if (userAppDetails.getPicture() == null) {

                pictureRepository.save(requestPicture);
                userAppDetails.setPicture(requestPicture);

            } else {
                Picture picture = userAppDetails.getPicture();
                picture.setImageName(requestPicture.getImageName());
                picture.setImageData(requestPicture.getImageData());
                picture.setUserAppDetails(userAppDetails);
                userAppDetails.setPicture(picture);
                pictureRepository.save(picture);
            }


        }


        // Edit Address
        userAppAddress.setLabel(userDetailDto.getAddress());
        userAppAddressRepository.save(userAppAddress);

        // Edit Details
        userAppDetails.setFullname(userDetailDto.getFullName());
        userAppDetails.setPhoneNumber(userDetailDto.getPhoneNumber());
        userAppDetails.setUserAppAddress(userAppAddress);


        userAppDetailsRepository.save(userAppDetails);

    }



    public UserRoleDetails<Object> getUserRoleDetails(UserApp user){

        UserRoleDetails<Object> userRoleDetails = new UserRoleDetails<>();
        String role = user.getUserRole().name();

        if (role.equals("DRIVER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getDriver());
        } else if (role.equals("PARTNER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getPartner());
        } else if (role.equals("MEMBER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getMember());
        } else if (role.equals("VOLUNTEER")) {
            userRoleDetails.setRoleDetails(user.getUserDetails().getVolunteer());
        }

        userRoleDetails.setRole(user.getUserRole().name());
        userRoleDetails.setAddress(user.getUserDetails().getUserAppAddress().getLabel());
        userRoleDetails.setEmail(user.getEmail());
        userRoleDetails.setFullname(user.getUserDetails().getFullname());


        return userRoleDetails;
    }


}
