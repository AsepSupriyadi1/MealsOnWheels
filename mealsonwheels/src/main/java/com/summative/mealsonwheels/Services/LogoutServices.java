package com.summative.mealsonwheels.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Tokens;
import com.summative.mealsonwheels.Repositories.TokensRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LogoutServices implements LogoutHandler {


    @Autowired
    private TokensRepository tokensRepository;

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        // ambil header dari request nya
        final String authHeader = request.getHeader("Authorization");
        final String jwt;

        // cek jika header nya ada dan dimulai dengan kata "Bearer " atau tidak
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            return; 
        }

         jwt = authHeader.substring(7); // dimulai dari 7 karena kata "Bearer " itu jumlahnya 7
         Tokens storedToken = tokensRepository.findByToken(jwt).orElse(null);

        if(storedToken != null){
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokensRepository.save(storedToken);
        }

    }
    
}
