package com.summative.mealsonwheels.Controllers;
import java.util.List;

import com.summative.mealsonwheels.Entity.Partner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.constrant.MealsStatus;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Repositories.MealsRepository;
import com.summative.mealsonwheels.Repositories.OrderRepository;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
import com.summative.mealsonwheels.Services.UserAppService;

@RestController
@RequestMapping("/api/v1/partner")
public class PartnerController {

    
    @Autowired
    private OrderServices orderServices;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserAppService userAppService;

    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private MealsRepository mealsRepository;


    @GetMapping("/order/{id}/update")
    public ResponseEntity<MessageResponse> proceedMeals(@PathVariable Long id, @RequestParam("mealStatus") String mealsStatus) {
        Order order = orderServices.findOrderById(id);


        if(mealsStatus.equals("PROCESS")){
            order.setStatus(OrderStatus.PROCESS);
            order.setMealsStatus(MealsStatus.PROCESS);
            orderServices.save(order);
            return ResponseEntity.ok(new MessageResponse("preparing order_id: " + id));
        } else if (mealsStatus.equals("READY_TO_DELIVER")){
            order.setMealsStatus(MealsStatus.READY_TO_DELIVER);
            orderServices.save(order);
            return ResponseEntity.ok(new MessageResponse("preparing order_id: " + id));
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("Not Found"));
        
    }


    // @GetMapping("/order/{id}/complete")
    // public MessageResponse mealsCompleted(@PathVariable Long id) {
    //     Order order = orderServices.findOrderById(id);
    //     order.setStatus(OrderStatus.READY_TO_DELIVER);
    //     orderServices.save(order);

    //     return new MessageResponse("order_id: " + id + "ready to delivered");
    // }


    @GetMapping("/count-meals")
    public ResponseEntity<Long> countMeals() {
        Long total = mealsRepository.count();
        return ResponseEntity.ok(total);
    }


    @GetMapping("/count-partner-task")
    public ResponseEntity<Long> countPartnerTask() {
        Long total = orderRepository.countByPartner(userAppService.getCurrentUser().getUserDetails().getPartner());
        return ResponseEntity.ok(total);
    }



    @GetMapping("/all-partner-task")
    public ResponseEntity<List<Order>> getAllPartnerTask() {
        List<Order> listPartnerTask = orderRepository.findByPartner(userAppService.getCurrentUser().getUserDetails().getPartner());
        return ResponseEntity.ok(listPartnerTask);
    }

    @GetMapping("/all-meals")
    public List<Meals> allMeals(){
        return mealsServices.getAllMeals();
    }



}
