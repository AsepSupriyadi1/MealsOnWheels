package com.summative.mealsonwheels.Controllers;
import java.util.HashMap;
import java.util.List;

import com.summative.mealsonwheels.Dto.Delivery;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.constrant.VolunteerStatus;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
@RequestMapping(value = {"/api/v1/driver", "/api/v1/volunteer"})
public class DriverController {
    
    
    @Autowired
    private OrderServices orderServices;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserAppService userAppService;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private VolunteerRepository volunteerRepository;



    @PostMapping("/delivery/update")
    public ResponseEntity<MessageResponse> proceedMeals(@RequestBody Delivery delivery) {
        Order order = orderServices.findOrderById(delivery.getOrderId());
        String requestStatus = delivery.getRequestStatus();
        UserApp driver = userAppService.getCurrentUser();
        MessageResponse messageResponse = new MessageResponse();
        
        

        try {
            
            if(driver.getUserRole().name().equals("DRIVER")){
                messageResponse = orderServices.updateDeliveryStatus(order, driver.getUserDetails(), requestStatus);
            } else if(driver.getUserRole().name().equals("VOLUNTEER")) {
                messageResponse = orderServices.updateDeliveryStatus(order, driver.getUserDetails(), requestStatus);
            }
            
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new MessageResponse(e.getMessage()));
        }

        return ResponseEntity.ok(messageResponse);
    }


    @GetMapping("/driver-profile")
    public ResponseEntity<?> getCurrentLoggedDriver() {

        UserApp currentUser = userAppService.getCurrentUser();

        if(currentUser.getUserRole().name().equals("DRIVER")){
            return ResponseEntity.ok(currentUser.getUserDetails().getDriver());
        }
        return ResponseEntity.ok(currentUser.getUserDetails().getVolunteer());
    }


    @GetMapping("/delivery-details/{orderId}")
    public ResponseEntity<Order> getDeliveryDetailsById(@PathVariable("orderId") Long orderId) {
        Order order = orderRepository.findById(orderId).get();
        return ResponseEntity.ok(order);
    }

    @GetMapping("/all-driver-task")
    public ResponseEntity<List<Order>> getAllDriverTask() {
        List<Order> order = orderRepository.findByDriver(userAppService.getCurrentUser().getUserDetails().getUserDetailsId());
        return ResponseEntity.ok(order);
    }

    @GetMapping("/count-driver-task")
    public ResponseEntity<Long> countDriverTask() {


        Long totalDriverTask = orderRepository.countByDriver(userAppService.getCurrentUser().getUserDetails().getUserDetailsId());
        return ResponseEntity.ok(totalDriverTask);
    }


}
