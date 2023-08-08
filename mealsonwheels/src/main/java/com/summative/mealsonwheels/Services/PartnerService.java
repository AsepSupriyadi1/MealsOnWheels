package com.summative.mealsonwheels.Services;

import com.summative.mealsonwheels.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
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







}
