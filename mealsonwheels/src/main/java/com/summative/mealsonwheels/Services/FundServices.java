package com.summative.mealsonwheels.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Funds;
import com.summative.mealsonwheels.Repositories.FundsRepository;

@Service
public class FundServices {
    
    @Autowired
    private FundsRepository fundsRepository;


    public Funds saveFunds(Funds funds){

       return fundsRepository.save(funds);

    }



}
