package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
