package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.Driver;

public interface DriverRepository  extends JpaRepository<Driver, Long> {
    
}
