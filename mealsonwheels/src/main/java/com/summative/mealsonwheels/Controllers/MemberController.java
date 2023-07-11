package com.summative.mealsonwheels.Controllers;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
import com.summative.mealsonwheels.Services.UserAppService;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {


    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private OrderServices orderServices;

    @Autowired
    private UserAppService userAppService;


    @GetMapping("/all-active-meals")
    public List<Meals> getAllActiveMeals(){
        List<Meals> meals = mealsServices.getAllMeals();

        List<Meals> ActiveMealsList = meals.stream()
            .filter(Meals::isActive) 
            .collect(Collectors.toList());

        return ActiveMealsList;
    }


    @GetMapping("/order/{mealsId}/create")
    public MessageResponse memberOrder(@PathVariable(name = "mealsId") Long mealsId){

        Meals meals = mealsServices.findMealsById(mealsId);

        Order orderRequest = new Order();
        orderRequest.setMeals(meals);
        orderRequest.setDatetime(new Date());
        orderRequest.setStatus(OrderStatus.PENDING);
        orderRequest.setUser(userAppService.getCurrentUser());


        orderServices.save(orderRequest);

        return new MessageResponse("You Have Successfully Requested an Order");
    }


    
}
