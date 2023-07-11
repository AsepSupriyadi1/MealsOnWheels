package com.summative.mealsonwheels.Controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.maps.DirectionsApi.Response;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Repositories.PartnerRepository;
import com.summative.mealsonwheels.Services.OrderServices;


@RestController
@RequestMapping("/api/v1/driver")
public class DriverController {
    
    
    @Autowired
    private OrderServices orderServices;




    @GetMapping("/order/{id}/take")
    public ResponseEntity<MessageResponse> proceedMeals(@PathVariable Long id) {
        Order order = orderServices.findOrderById(id);

        MessageResponse response = new MessageResponse();

        if(order.getStatus().name().equals("PREPARING")){
            response.setMessage("MEALS STILL UNDER PREPARATION");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }

        order.setStatus(OrderStatus.TAKEAWAY);
        response.setMessage("Meals took by driver with id " + order.getDriver().getDriverId());
        orderServices.save(order);

        return ResponseEntity.ok(response);
    }


    // @GetMapping("/order/{id}/deliver")
    // public ResponseEntity<MessageResponse> deliver(@PathVariable Long id) {
    //     Order order = orderServices.findOrderById(id);

    //     MessageResponse response = new MessageResponse();

    //     if(order.getStatus().name().equals("PREPARING")){
    //         response.setMessage("MEALS STILL UNDER PREPARATION");
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    //     }

    //     order.setStatus(OrderStatus.TAKEAWAY);
    //     response.setMessage("Meals took by driver with id " + order.getDriver().getDriverId());
    //     orderServices.save(order);

    //     return ResponseEntity.ok(response);
    // }


    @GetMapping("/order/{id}/complete")
    public MessageResponse mealsCompleted(@PathVariable Long id) {
        Order order = orderServices.findOrderById(id);
        order.setStatus(OrderStatus.READY_TO_DELIVER);
        orderServices.save(order);

        return new MessageResponse("preparing order_id: " + id);
    }


}
