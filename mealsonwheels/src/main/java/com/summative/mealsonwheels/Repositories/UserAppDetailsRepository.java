package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;


public interface UserAppDetailsRepository extends JpaRepository<UserAppDetails, Long> {
    
    Optional<UserAppDetails> findByUser(UserApp user);

}
