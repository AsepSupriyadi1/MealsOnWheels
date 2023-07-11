package com.summative.mealsonwheels.Controllers;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Dto.EntityRequest.FeedbackRequest;
import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.constrant.MealsStatus;
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


    @PostMapping("/order/feedback")
    public MessageResponse memberFeedback(@RequestBody FeedbackRequest request){

        Order order = orderServices.findOrderById(request.getOrderId());
    
        order.setStatus(OrderStatus.COMPLETED);
        order.setFeedback(request.getFeedback());

        orderServices.save(order);

        return new MessageResponse("You Have Successfully Requested an Order");
    }



    @GetMapping("/all-orders")
    public List<Order> getAllOrders(){
        UserApp user = userAppService.getCurrentUser();
        List<Order> listOrder = orderServices.findAllOrderByMember(user.getUserDetails().getMember());
        return listOrder;
    }



    @GetMapping("/order/{mealId}/create")
    public MessageResponse memberOrder(@PathVariable(name = "mealId") Long mealId){


        Meals meals = mealsServices.findMealsById(mealId);
        Order order = new Order();
        order.setMeals(meals);
        order.setMealsStatus(MealsStatus.PENDING);
        order.setMember(userAppService.getCurrentUser().getUserDetails().getMember());
        order.setDatetime(new Date());
        order.setStatus(OrderStatus.PENDING);
       

        orderServices.save(order);

        return new MessageResponse("You Have Successfully Requested an Order");
    }





    
}
