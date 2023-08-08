package com.summative.mealsonwheels.Repositories;

import java.util.List;

import com.summative.mealsonwheels.Entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface OrderRepository extends JpaRepository<Order, Long> {
    
    List<Order> findByMember(Member member);

    @Query("SELECT o FROM Order o WHERE o.driver.userDetailsId = :driverId AND o.deliveryStatus != 'DELIVERED'")
    List<Order> findByDriver(@Param("driverId") Long driverId);
    List<Order> findByPartner(UserAppDetails partner);


    @Query("SELECT o FROM Order o WHERE o.status != 'COMPLETED'")
    List<Order> findUncompletedMeals();


    @Query("SELECT count(o) FROM Order o WHERE o.driver.userDetailsId = :driverId AND o.deliveryStatus != 'DELIVERED'")
    Long countByDriver(@Param("driverId") Long driverId);
    Long countByPartner(UserAppDetails driver);

}
