package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.UserApp;


public interface DriverRepository  extends JpaRepository<Driver, Long> {
    
    @Query("SELECT p FROM Driver p JOIN p.user u WHERE u.userId = :userId")
    Driver getDriversByUserId(@Param("userId") Long userId);


    Optional<Driver> findDriverByUser(UserApp user);

}
