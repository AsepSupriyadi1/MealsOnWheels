package com.summative.mealsonwheels.Services;

import jakarta.transaction.Transactional;
import java.util.List;
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


    public List<Meals> getAllMeals(){
       return mealsRepository.findAll();
    }

    public Long countAllMeals(){
       return mealsRepository.count();
    }


    public Meals findMealsById(Long mealsId){
       return mealsRepository.findById(mealsId).get();
    }






}
