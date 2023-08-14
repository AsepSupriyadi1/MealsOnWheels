package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Funds;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;


public interface FundsRepository extends JpaRepository<Funds, Long> {
    

    @Query("SELECT SUM(f.donorAmount) FROM Funds f")
    Optional<Double> countTotalFunds();


}
