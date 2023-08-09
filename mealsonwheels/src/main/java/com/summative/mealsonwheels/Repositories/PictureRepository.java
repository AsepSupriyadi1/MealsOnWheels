package com.summative.mealsonwheels.Repositories;

import com.summative.mealsonwheels.Entity.UserAppDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Picture;

public interface PictureRepository extends JpaRepository<Picture, Long> {

    Picture findPictureByUserAppDetails(UserAppDetails userAppDetails);

}
