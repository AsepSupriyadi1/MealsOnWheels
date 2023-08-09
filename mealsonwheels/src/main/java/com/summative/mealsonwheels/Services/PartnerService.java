package com.summative.mealsonwheels.Services;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.constrant.MealsStatus;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Repositories.PartnerRepository;


@Service
public class PartnerService {
    

    @Autowired
    private PartnerRepository repo;


    @Autowired
    private OrderRepository orderRepository;


    public Partner save(Partner partner){
        return repo.save(partner);
    }



    public MessageResponse proceedMeals(Order order, String mealStatus){


        MessageResponse messageResponse = new MessageResponse();

        if(order.getMealsStatus().name().equals("PENDING") && mealStatus.equals("PROCESS")){
            order.setStatus(OrderStatus.PROCESS);
            order.setMealsStatus(MealsStatus.PROCESS);
            orderRepository.save(order);
            messageResponse.setMessage("preparing order_id: " + order.getOrderId());


        } else if (mealStatus.equals("READY_TO_DELIVER") && order.getMealsStatus().name().equals("PROCESS")){

            order.setMealsStatus(MealsStatus.READY_TO_DELIVER);
            orderRepository.save(order);
            messageResponse.setMessage("preparing order_id: " + order.getOrderId());

        } else {

            throw new RuntimeException("Not Found");

        }

        return messageResponse;

    }





}
