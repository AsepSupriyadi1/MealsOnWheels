package com.summative.mealsonwheels.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Entity.Meals;
import com.summative.mealsonwheels.Services.MealsServices;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {


    @Autowired
    private MealsServices mealsServices;


    @GetMapping("/all-active-meals")
    public List<Meals> getAllActiveMeals(){
        List<Meals> meals = mealsServices.getAllMeals();

        List<Meals> ActiveMealsList = meals.stream()
            .filter(Meals::isActive) 
            .collect(Collectors.toList());

        return ActiveMealsList;
    }

    
}
