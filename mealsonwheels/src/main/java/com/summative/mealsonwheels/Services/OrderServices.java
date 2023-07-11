package com.summative.mealsonwheels.Services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Repositories.OrderRepository;

@Service
public class OrderServices {
    

    @Autowired
    private OrderRepository orderRepository;


    public void save(Order order){
        orderRepository.save(order);
    }


     public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }


    public Order findOrderById(Long orderId){
        return orderRepository.findById(orderId).get();
    }

}
