package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

     Optional<Volunteer> findVolunteerByUser(UserApp user);

     @Query("SELECT p FROM Volunteer p JOIN p.user u WHERE u.isActive = true")
    List<Volunteer> getAllActiveVolunteer();
    
}
