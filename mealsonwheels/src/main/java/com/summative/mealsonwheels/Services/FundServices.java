package com.summative.mealsonwheels.Services;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.summative.mealsonwheels.Dto.EntityResponse.AssignUser;
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

    public List<Funds> getAllFunds() {
        List<Funds> fundsList = fundsRepository.findAll();

        fundsList.stream()
                .sorted(Comparator.comparingLong(Funds::getDonorId))
                .collect(Collectors.toList());

        return fundsList;

    }

    public Double getTotalFunds() {
        return fundsRepository.countTotalFunds().orElseThrow(() -> new RuntimeException("Not Found"));
    }



}
