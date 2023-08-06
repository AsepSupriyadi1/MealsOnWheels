package com.summative.mealsonwheels.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.constrant.DeliveryStatus;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Repositories.OrderRepository;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.OrderServices;
import com.summative.mealsonwheels.Services.UserAppService;


@RestController
@RequestMapping("/api/v1/driver")
public class DriverController {
    
    
    @Autowired
    private OrderServices orderServices;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserAppService userAppService;

    @Autowired
    private DriverServices driverServices;



    @GetMapping("/order/{id}/update")
    public ResponseEntity<MessageResponse> proceedMeals(@PathVariable Long id, @RequestParam("deliveryStatus") String requestStatus) {
        Order order = orderServices.findOrderById(id);
        Driver driver = userAppService.getCurrentUser().getUserDetails().getDriver();
        MessageResponse response = new MessageResponse();


        String mealStatus = order.getMealsStatus().name();
        String currentDeliveryStatus = order.getDeliveryStatus().name();

        if(requestStatus.equals("TAKE_MEALS") && currentDeliveryStatus.equals("PENDING")){
            driver.setDriverStatus(DriverStatus.UNAVAILABLE);
            order.setDeliveryStatus(DeliveryStatus.TAKE_MEALS);

        } else if (requestStatus.equals("ON_THE_WAY") && currentDeliveryStatus.equals("TAKE_MEALS")){

            if(!mealStatus.equals("READY_TO_DELIVER")){
                response.setMessage("MEALS STILL UNDER PREPARATION !");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }

            order.setStatus(OrderStatus.ON_THE_WAY);
            order.setDeliveryStatus(DeliveryStatus.ON_THE_WAY);


        } else if (requestStatus.equals("DELIVERED") && currentDeliveryStatus.equals("ON_THE_WAY")){

            order.setStatus(OrderStatus.DELIVERED);
            order.setDeliveryStatus(DeliveryStatus.DELIVERED);
            driver.setDriverStatus(DriverStatus.AVAILABLE);
            
        } else {
            response.setMessage("NOT FOUND");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
        
        orderServices.save(order);
        driverServices.save(driver);
//        response.setMessage("Meals took by driver with id " + order.getDriver().getDriverId());
        return ResponseEntity.ok(response);
    }


    @GetMapping("/driver-profile")
    public ResponseEntity<Driver> getCurrentLoggedDriver() {
        Driver order = userAppService.getCurrentUser().getUserDetails().getDriver();
        return ResponseEntity.ok(order);
    }


    @GetMapping("/delivery-details/{orderId}")
    public ResponseEntity<Order> getDeliveryDetailsById(@PathVariable("orderId") Long orderId) {
        Order order = orderRepository.findById(orderId).get();
        return ResponseEntity.ok(order);
    }


}
