package com.summative.mealsonwheels.Repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.summative.mealsonwheels.Entity.Meals;



public interface MealsRepository extends JpaRepository<Meals, Long> {
    


}
