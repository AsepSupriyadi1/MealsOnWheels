package com.summative.mealsonwheels.Controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Services.OrderServices;

@RestController
@RequestMapping("/api/v1/fund")
public class PartnerController {

    
    @Autowired
    private OrderServices orderServices;


    @GetMapping("/order/{id}/prepare")
    public MessageResponse proceedMeals(@PathVariable Long id) {
        Order order = orderServices.findOrderById(id);
        order.setStatus(OrderStatus.PREPARING);
        orderServices.save(order);

        return new MessageResponse("preparing order_id: " + id);
    }


    @GetMapping("/order/{id}/complete")
    public MessageResponse mealsCompleted(@PathVariable Long id) {
        Order order = orderServices.findOrderById(id);
        order.setStatus(OrderStatus.READY_TO_DELIVER);
        orderServices.save(order);

        return new MessageResponse("preparing order_id: " + id);
    }


}
