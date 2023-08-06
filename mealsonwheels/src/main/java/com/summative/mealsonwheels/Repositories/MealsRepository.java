package com.summative.mealsonwheels.Repositories;
import com.summative.mealsonwheels.Entity.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Meals;

import java.util.List;


public interface MealsRepository extends JpaRepository<Meals, Long> {
    


}
