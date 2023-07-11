package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

    
}
