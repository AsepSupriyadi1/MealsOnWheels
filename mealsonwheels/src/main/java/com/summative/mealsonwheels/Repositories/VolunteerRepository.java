package com.summative.mealsonwheels.Repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

     Optional<Volunteer> findVolunteerByUser(UserApp user);
    
}
