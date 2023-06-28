package com.summative.mow.Services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mow.Entity.Meals;
import com.summative.mow.Repositories.MealsRepository;

@Service
@Transactional
public class MealsServices {
    
    @Autowired
    private MealsRepository mealsRepository;

    public Meals addMeals(Meals meal){
       return mealsRepository.save(meal);
    }


}
