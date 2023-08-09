package com.summative.mealsonwheels.Services;



import java.util.Date;
import java.util.List;

import com.summative.mealsonwheels.Dto.EntityRequest.AssignRequest;
import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.*;
import com.summative.mealsonwheels.Entity.constrant.DeliveryStatus;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;
import com.summative.mealsonwheels.Entity.constrant.VolunteerStatus;
import com.summative.mealsonwheels.Repositories.UserAppDetailsRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Repositories.OrderRepository;

@Service
public class OrderServices {
    

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserAppDetailsRepository userAppDetailsRepository;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private UserAppService userAppService;


    public void save(Order order){
        orderRepository.save(order);
    }


     public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }


    public Order findOrderById(Long orderId){
        return orderRepository.findById(orderId).get();
    }

    public List<Order> findAllOrderByMember(Member member){
        return orderRepository.findByMember(member);
    }

    public Order assignPartner(AssignRequest assignRequest){

        Order order = findOrderById(assignRequest.getOrderId());
        UserAppDetails driver = userAppDetailsRepository.findById(assignRequest.getDriverId()).get();
        String driverRole = driver.getUser().getUserRole().name();

        UserAppDetails kitchen = userAppDetailsRepository.findById(assignRequest.getKitchenId()).get();
        String kitchenRole = kitchen.getUser().getUserRole().name();

        if (driverRole.equals("DRIVER") || driverRole.equals("VOLUNTEER")) {
            order.setDriver(driver);
        } else {
            System.out.println("Driver Not Found");
            throw new RuntimeException("Driver Not Found");
        }

        if (kitchenRole.equals("PARTNER") || kitchenRole.equals("VOLUNTEER")) {
            order.setPartner(kitchen);
        } else {
            System.out.println("Kitchen Not Found");
            throw new RuntimeException("Driver Not Found");
        }

        order.setFarFromPartner(assignRequest.getDistance() > 10d);
        order.setStatus(OrderStatus.ASSIGNED);
        order.setUpdated_at(new Date());

        if(order.isWeekEnd()){
            order.setFrozen(true);
        } else order.setFrozen(!order.isWeekEnd() && order.isFarFromPartner());

        order.setDistance(assignRequest.getDistance());
        return orderRepository.save(order);

    }

    public Order checkDistance(Order order){
        if(order.isWeekEnd()){
            order.setFrozen(true);
            return order;
        } else if(!order.isWeekEnd() && order.isFarFromPartner()) {
            order.setFrozen(true);
            return order;
        }  else {
            order.setFrozen(false);
            return order;
        }
    }




    // -=-=-=-=-=-=-=-=-=-=- DRIVER --=-=-=-=-=-=-=-=-=-=--==-=-=-=-=
    public MessageResponse updateDeliveryStatus(Order order, UserAppDetails driver, String status){

        String mealStatus = order.getMealsStatus().name();
        String currentDeliveryStatus = order.getDeliveryStatus().name();
        String driverRoles = driver.getUser().getUserRole().name();
        MessageResponse response = new MessageResponse();

        if(status.equals("TAKE_MEALS") && currentDeliveryStatus.equals("PENDING")){

            if(driverRoles.equals("DRIVER")){
                driver.getDriver().setDriverStatus(DriverStatus.UNAVAILABLE);
            } else if (driverRoles.equals("VOLUNTEER")) {
                driver.getVolunteer().setVolunteerStatus(VolunteerStatus.UNAVAILABLE);
            }

            order.setDeliveryStatus(DeliveryStatus.TAKE_MEALS);

        } else if (status.equals("ON_THE_WAY") && currentDeliveryStatus.equals("TAKE_MEALS")){

            if(!mealStatus.equals("READY_TO_DELIVER")){
                response.setMessage("MEALS STILL UNDER PREPARATION !");
                throw new RuntimeException("MEALS STILL UNDER PREPARATION !");
            }

            order.setStatus(OrderStatus.ON_THE_WAY);
            order.setDeliveryStatus(DeliveryStatus.ON_THE_WAY);


        } else if (status.equals("DELIVERED") && currentDeliveryStatus.equals("ON_THE_WAY")){

            order.setStatus(OrderStatus.DELIVERED);
            order.setDeliveryStatus(DeliveryStatus.DELIVERED);

            if(driverRoles.equals("DRIVER")){
                driver.getDriver().setDriverStatus(DriverStatus.AVAILABLE);
            } else if (driverRoles.equals("VOLUNTEER")){
                driver.getVolunteer().setVolunteerStatus(VolunteerStatus.AVAILABLE);
            }

        } else {
            response.setMessage("NOT FOUND");
            throw new RuntimeException("NOT FOUND");
        }

        orderRepository.save(order);

        if(driverRoles.equals("DRIVER")){
            driverServices.save(driver.getDriver());
        } else if (driverRoles.equals("VOLUNTEER")){
            volunteerRepository.save(driver.getVolunteer());
        }

        response.setMessage("Meals took by driver with id " + order.getDriver().getFullname());
        return response;

    }














}
