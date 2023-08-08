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
        MessageResponse response = new MessageResponse();


        String mealStatus = order.getMealsStatus().name();
        String currentDeliveryStatus = order.getDeliveryStatus().name();

        if(requestStatus.equals("TAKE_MEALS") && currentDeliveryStatus.equals("PENDING")){

            if(driver.getUserRole().name().equals("DRIVER")){
                driver.getUserDetails().getDriver().setDriverStatus(DriverStatus.UNAVAILABLE);
            } else if (driver.getUserRole().name().equals("VOLUNTEER")) {
                driver.getUserDetails().getVolunteer().setVolunteerStatus(VolunteerStatus.UNAVAILABLE);
            }

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

            if(driver.getUserRole().name().equals("DRIVER")){
                driver.getUserDetails().getDriver().setDriverStatus(DriverStatus.AVAILABLE);
            } else if (driver.getUserRole().name().equals("VOLUNTEER")){
                driver.getUserDetails().getVolunteer().setVolunteerStatus(VolunteerStatus.AVAILABLE);
            }

        } else {
            response.setMessage("NOT FOUND");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }

        orderServices.save(order);

        if(driver.getUserRole().name().equals("DRIVER")){
           driverServices.save(driver.getUserDetails().getDriver());
        } else if (driver.getUserRole().name().equals("VOLUNTEER")){
            volunteerRepository.save(driver.getUserDetails().getVolunteer());
        }

        response.setMessage("Meals took by driver with id " + order.getDriver().getFullname());
        return ResponseEntity.ok(response);
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
