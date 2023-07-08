package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;


public interface UserAppRepository extends JpaRepository<UserApp, Long> {


    public Optional<UserApp> findByEmail(String email);

    // @Query("SELECT p FROM UserApp WHERE u.isActive = :isActive")
    // List<Partner> findActivePartners(@Param("isActive") boolean isActive);


}
