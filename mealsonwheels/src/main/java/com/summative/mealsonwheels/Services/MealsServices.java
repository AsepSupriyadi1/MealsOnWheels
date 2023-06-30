package com.summative.mealsonwheels.Services;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Repositories.MealsRepository;

@Service
@Transactional
public class MealsServices {
    
    @Autowired
    private MealsRepository mealsRepository;

    public Meals addMeals(Meals meal){
       return mealsRepository.save(meal);
    }


}
