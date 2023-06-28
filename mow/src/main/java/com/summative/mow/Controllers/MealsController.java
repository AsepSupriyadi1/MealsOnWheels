package com.summative.mow.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mow.Dto.MealsRequest;
import com.summative.mow.Entity.Meals;
import com.summative.mow.Services.MealsServices;

@RestController
@RequestMapping("/api/v1/meal")
public class MealsController {
    
    @Autowired
    private MealsServices mealsServices;

    @PostMapping("/add")
    public ResponseEntity<MealsRequest> addMeals(@RequestBody Meals meal){

        MealsRequest mealsRequest = new MealsRequest();

        try {
            mealsRequest.setMessage("Meals added successfully");
            mealsRequest.setError(null);
            mealsRequest.setPayload(mealsServices.addMeals(meal));
            return ResponseEntity.ok(mealsRequest);
        } catch(Exception e) {
            mealsRequest.setMessage(null);
            mealsRequest.setError("Error Occured");
            mealsRequest.setPayload(null);
            return ResponseEntity.ok(mealsRequest);
        }

    }



}
