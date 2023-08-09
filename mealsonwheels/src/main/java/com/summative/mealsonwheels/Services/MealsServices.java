package com.summative.mealsonwheels.Services;

import com.summative.mealsonwheels.Dto.EntityRequest.AddMealsRequest;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.Picture;
import com.summative.mealsonwheels.Repositories.PictureRepository;
import jakarta.transaction.Transactional;

import java.io.IOException;
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

    @Autowired
    private PictureRepository pictureRepository;


    public Meals addMeals(Meals meals) throws IOException {

        Picture picture = meals.getPicture();
        pictureRepository.save(picture);

        meals.setMealsName(meals.getMealsName());
        meals.setPicture(picture);
        meals.setStock(meals.getStock());
        return mealsRepository.save(meals);
    }


    public List<Meals> getAllMeals() {
        return mealsRepository.findAll();
    }


    public Long countAllMeals() {
        return mealsRepository.count();
    }


    public Meals findMealsById(Long mealsId) {
        return mealsRepository.findById(mealsId).get();
    }


}
