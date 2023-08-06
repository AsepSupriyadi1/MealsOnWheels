package com.summative.mealsonwheels.Repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.summative.mealsonwheels.Entity.Driver;



public interface DriverRepository  extends JpaRepository<Driver, Long> {
    

    @Query("SELECT d FROM Driver d INNER JOIN d.userDetails ud WHERE ud.user.isActive = true AND d.driverStatus = AVAILABLE")
    List<Driver> getAllAvailableDriver();

    @Query("SELECT COUNT(d) FROM Driver d INNER JOIN d.userDetails ud WHERE ud.user.isActive = true")
    Long countActiveDriver();

}
