package com.summative.mealsonwheels.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.Partner;
import org.springframework.data.jpa.repository.Query;


public interface OrderRepository extends JpaRepository<Order, Long> {
    
    List<Order> findByMember(Member member);
    List<Order> findByDriver(Driver driver);
    List<Order> findByPartner(Partner partner);


    @Query("SELECT o FROM Order o WHERE o.status != 'COMPLETED'")
    List<Order> findUncompletedMeals();
    Long countByDriver(Driver driver);
    Long countByPartner(Partner driver);

}
