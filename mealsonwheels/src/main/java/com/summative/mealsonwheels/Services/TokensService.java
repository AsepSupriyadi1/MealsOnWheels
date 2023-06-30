package com.summative.mealsonwheels.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Tokens;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Repositories.TokensRepository;

@Service
public class TokensService {
    
    @Autowired
    private TokensRepository tokensRepository;

    public void revokeAllUserTokens(UserApp user){

        List<Tokens> validAllUserTokens = tokensRepository.findAllValidTokensByUser(user.getUserId());

        if(validAllUserTokens.isEmpty()){
            return;
        }

        validAllUserTokens.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);
        });

        tokensRepository.saveAll(validAllUserTokens);

    }



}
