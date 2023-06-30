package com.summative.mealsonwheels.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;


import com.summative.mealsonwheels.Entity.Meals;


public interface MealsRepository extends JpaRepository<Meals, Long> {
    



}
