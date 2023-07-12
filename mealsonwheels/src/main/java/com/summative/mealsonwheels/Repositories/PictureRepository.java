package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Picture;

public interface PictureRepository extends JpaRepository<Picture, Long> {
    
}
