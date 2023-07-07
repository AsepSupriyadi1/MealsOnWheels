package com.summative.mealsonwheels.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Repositories.PartnerRepository;


@Service
public class PartnerService {
    

    @Autowired
    private PartnerRepository repo;


    public Partner save(Partner partner){
        return repo.save(partner);
    }


    public List<Partner> getAllNonActivePartners(){
        return repo.findActivePartners(false);
    }

     public List<Partner> getAllActivePartners(){
        return repo.findActivePartners(true);
    }


}