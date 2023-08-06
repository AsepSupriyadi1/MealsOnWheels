package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Volunteer;
import org.springframework.data.jpa.repository.Query;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {


    @Query("SELECT COUNT(d) FROM Volunteer d INNER JOIN d.userDetails ud WHERE ud.user.isActive = true")
    Long countActiveVolunteer();

}
