package com.summative.mealsonwheels.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.summative.mealsonwheels.Entity.Driver;


public interface DriverRepository  extends JpaRepository<Driver, Long> {
    
     @Query("SELECT p FROM Driver p JOIN p.user u WHERE u.isActive = :isActive")
    List<Driver> findActiveDrivers(@Param("isActive") boolean isActive);

}
