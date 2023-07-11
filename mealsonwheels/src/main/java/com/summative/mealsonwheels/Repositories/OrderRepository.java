package com.summative.mealsonwheels.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.Partner;


public interface OrderRepository extends JpaRepository<Order, Long> {
    
    List<Order> findByMember(Member member);
    List<Order> findByDriver(Driver member);
    List<Order> findByPartner(Partner member);

}
