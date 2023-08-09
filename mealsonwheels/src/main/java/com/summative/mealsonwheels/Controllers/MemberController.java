package com.summative.mealsonwheels.Controllers;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.summative.mealsonwheels.Dto.EntityRequest.OrderMealRequest;
import com.summative.mealsonwheels.utils.HaversineDistanceCalculator;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.summative.mealsonwheels.Entity.constrant.DeliveryStatus;
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


    @Autowired
    private HaversineDistanceCalculator distanceCalculator;


    @GetMapping("/all-active-meals")
    public List<Meals> getAllActiveMeals(){

//        List<Meals> ActiveMealsList = meals.stream()
//            .filter(Meals::isActive)
//            .collect(Collectors.toList());

        return mealsServices.getAllMeals();
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



    @GetMapping("/order/{mealId}")
    public MessageResponse memberOrder(@PathVariable("mealId") Long mealId){

        UserApp user = userAppService.getCurrentUser();
        Calendar calendar = Calendar.getInstance();
        Meals meals = mealsServices.findMealsById(mealId);
        Order order = new Order();

        order.setMeals(meals);
        order.setMealsStatus(MealsStatus.PENDING);
        order.setDeliveryStatus(DeliveryStatus.PENDING);
        order.setDatetime(new Date());
        order.setMember(user.getUserDetails().getMember());
        order.setStatus(OrderStatus.PENDING);

        int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
        if(dayOfWeek == Calendar.SATURDAY || dayOfWeek == Calendar.SUNDAY){
            order.setWeekEnd(true);
            orderServices.save(order);
            return new MessageResponse("The meal's request has been sent successfully");
        }

        order.setWeekEnd(false);
        orderServices.save(order);
        return new MessageResponse("The meal's request has been sent successfully");

    }




    @GetMapping("/meals/{mealsId}")
    public ResponseEntity<?> findMealsById(@PathVariable(name = "mealsId") Long mealsId ){

        try {
            Meals meals = mealsServices.findMealsById(mealsId);
            return ResponseEntity.ok(meals);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Not Found");
        }

    }


    @GetMapping("/order-details/{orderId}")
    public ResponseEntity<?> findOrderById(@PathVariable(name = "orderId") Long orderId){

        try {
            Order order = orderServices.findOrderById(orderId);
            return ResponseEntity.ok(order);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Not Found");
        }

    }




    
}
