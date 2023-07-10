package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.summative.mealsonwheels.Entity.UserApp;


public interface UserAppRepository extends JpaRepository<UserApp, Long> {


    public Optional<UserApp> findByEmail(String email);

    @Query("SELECT u FROM UserApp u WHERE u.isActive = false AND u.userRole != ADMIN")
    List<UserApp> getAllInactiveUsers();


    @Query("SELECT p FROM UserApp p JOIN p.driver d WHERE d.user.userId = :userId")
    UserApp getUserDriverById(Long userId);

}
