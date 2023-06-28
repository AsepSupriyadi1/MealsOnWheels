package com.summative.mow.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WelcomeController {
    

    @GetMapping(value="/test")
    public String getMethodName() {
        return "Hello Inka";
    }
    

    
}
