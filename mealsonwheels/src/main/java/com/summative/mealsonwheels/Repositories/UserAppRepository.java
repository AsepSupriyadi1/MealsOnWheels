package com.summative.mealsonwheels.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.UserApp;


public interface UserAppRepository extends JpaRepository<UserApp, Long> {


    public Optional<UserApp> findByEmail(String email);


}
