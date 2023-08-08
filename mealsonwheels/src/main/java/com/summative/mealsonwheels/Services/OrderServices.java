package com.summative.mealsonwheels.Services;



import java.util.List;

import com.summative.mealsonwheels.Entity.*;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Repositories.OrderRepository;

@Service
public class OrderServices {
    

    @Autowired
    private OrderRepository orderRepository;


    public void save(Order order){
        orderRepository.save(order);
    }


     public List<Order> getAllOrders(){
        return orderRepository.findUncompletedMeals();
    }


    public Order findOrderById(Long orderId){
        return orderRepository.findById(orderId).get();
    }

    public List<Order> findAllOrderByMember(Member member){
        return orderRepository.findByMember(member);
    }











}
