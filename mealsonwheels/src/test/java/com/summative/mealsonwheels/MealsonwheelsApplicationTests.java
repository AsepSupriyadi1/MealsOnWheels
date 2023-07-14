package com.summative.mealsonwheels;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;

import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.constrant.UserRole;
import com.summative.mealsonwheels.Services.UserAppService;

@SpringBootTest
class MealsonwheelsApplicationTests {


	@Autowired
	private UserAppService userAppService;


	@Test
	void contextLoads() {
	}



	@Test
	void loginAsAdmin(){
		UserDetails loginUser = userAppService.loadUserByUsername("admin@gmail.com");
		UserApp user = userAppService.findUserByEmail(loginUser.getUsername());
		Assertions.assertEquals(UserRole.ADMIN, user.getUserRole());
	}

}
