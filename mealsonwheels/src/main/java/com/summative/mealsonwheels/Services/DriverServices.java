package com.summative.mealsonwheels.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Repositories.DriverRepository;

@Service
public class DriverServices {
    
    @Autowired
    private DriverRepository repo;

    public Driver save(Driver driver){
        return repo.save(driver);
    }

    public Driver findDriverByUserId(Long userId){
        return repo.getDriversByUserId(userId);
    }



    public Driver findDriverByUser(UserApp user){
        return repo.findDriverByUser(user).get();
    }


    // public List<Driver> getAllNonActiveDrivers(){
    //     return repo.getAllDrivers(false);
    // }

    //  public List<Driver> getAllActiveDrivers(){
    //     return repo.getAllDrivers(true);
    // }


}
