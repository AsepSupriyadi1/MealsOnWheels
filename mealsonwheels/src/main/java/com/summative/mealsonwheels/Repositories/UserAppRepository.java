package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.constrant.UserRole;


public interface UserAppRepository extends JpaRepository<UserApp, Long> {


    public Optional<UserApp> findByEmail(String email);

    @Query("SELECT u FROM UserApp u WHERE u.isActive = false AND u.userRole != ADMIN")
    List<UserApp> getAllInactiveUsers();

    @Query("SELECT u FROM UserApp u WHERE u.isActive = true AND u.userRole != ADMIN AND u.userRole = :role")
    List<UserApp> getAllActiveUsers(UserRole role);


}
