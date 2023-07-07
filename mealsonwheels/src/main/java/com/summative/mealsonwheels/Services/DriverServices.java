package com.summative.mealsonwheels.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Repositories.DriverRepository;

@Service
public class DriverServices {
    
    @Autowired
    private DriverRepository repo;

    public Driver save(Driver driver){
        return repo.save(driver);
    }


    public List<Driver> getAllNonActiveDrivers(){
        return repo.findActiveDrivers(false);
    }

     public List<Driver> getAllActiveDrivers(){
        return repo.findActiveDrivers(true);
    }


}
