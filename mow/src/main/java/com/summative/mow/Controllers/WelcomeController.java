package com.summative.mow.Controllers;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mow.Dto.LoginRequest;


@RestController
public class WelcomeController {
    

    @PostMapping(value="/test")
    public LoginRequest getMethodName(@RequestBody LoginRequest loginRequest) {
        return loginRequest;
    }
    

    
}
