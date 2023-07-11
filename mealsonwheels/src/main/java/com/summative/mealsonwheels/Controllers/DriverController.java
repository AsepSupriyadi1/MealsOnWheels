package com.summative.mealsonwheels.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Order;
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




    @GetMapping("/order/{id}/take")
    public ResponseEntity<MessageResponse> proceedMeals(@PathVariable Long id) {
        Order order = orderServices.findOrderById(id);

        MessageResponse response = new MessageResponse();

        if(order.getStatus().name().equals("PROCESS")){
            response.setMessage("MEALS STILL UNDER PREPARATION");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }

        order.setStatus(OrderStatus.ON_THE_WAY);
      


        Driver driver = userAppService.getCurrentUser().getUserDetails().getDriver();
        driver.setDriverStatus(DriverStatus.UNAVAILABLE);

        
        orderServices.save(order);
        driverServices.save(driver);


        response.setMessage("Meals took by driver with id " + order.getDriver().getDriverId());
        return ResponseEntity.ok(response);
    }


    @GetMapping("/order/{id}/delivered")
    public ResponseEntity<MessageResponse> deliver(@PathVariable Long id) {
        Order order = orderServices.findOrderById(id);

        MessageResponse response = new MessageResponse();

        order.setStatus(OrderStatus.DELIVERED);
      

        Driver driver = userAppService.getCurrentUser().getUserDetails().getDriver();
        driver.setDriverStatus(DriverStatus.AVAILABLE);

        orderServices.save(order);
        driverServices.save(driver);

        response.setMessage("Meals delivered by driver with id " + order.getDriver().getDriverId());
        return ResponseEntity.ok(response);
    }




    @GetMapping("/driver-profile")
    public ResponseEntity<Driver> getCurrentLoggedDriver() {
        Driver order = userAppService.getCurrentUser().getUserDetails().getDriver();
        return ResponseEntity.ok(order);
    }


    @GetMapping("/count-driver-task")
    public ResponseEntity<Long> countDriverTask() {
        Long total = orderRepository.countByDriver(userAppService.getCurrentUser().getUserDetails().getDriver());
        return ResponseEntity.ok(total);
    }


    @GetMapping("/all-driver-task")
    public ResponseEntity<List<Order>> getAllDriverTask() {
        List<Order> listDriverTask = orderRepository.findByDriver(userAppService.getCurrentUser().getUserDetails().getDriver());
        return ResponseEntity.ok(listDriverTask);
    }



}
