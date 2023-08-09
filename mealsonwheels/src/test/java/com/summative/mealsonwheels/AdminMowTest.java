package com.summative.mealsonwheels;

import com.summative.mealsonwheels.Entity.*;
import com.summative.mealsonwheels.Repositories.*;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;

import com.summative.mealsonwheels.Entity.constrant.UserRole;
import com.summative.mealsonwheels.Services.UserAppService;

import java.io.IOException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.times;

@SpringBootTest
class AdminMowTest {

	@Autowired
	private UserAppService userAppService;

	@Autowired
	private MealsServices mealsServices;

	@Autowired
	private OrderServices orderServices;

	@MockBean
	private AuthenticationManager authenticationManager;

	@MockBean
	private MealsRepository mealsRepository;

	@MockBean
	private PictureRepository pictureRepository;

	@MockBean
	private UserAppRepository userAppRepository;

	@MockBean
	private OrderRepository orderRepository;


	@MockBean
	private UserAppDetailsRepository userAppDetailsRepository;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}


	@Test
	public void testLogin() {
		// Setup
		UserApp user = new UserApp();
		user.setEmail("admin@mow.com");
		user.setPassword("password");
		user.setActive(true);
		user.setUserRole(UserRole.ADMIN);

		Mockito.when(userAppRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

		// Call the method
		UserDetails userDetails = userAppService.loadUserByUsername("user@example.com");

		// Assertions
		assertNotNull(userDetails);
		assertEquals("admin@mow.com", userDetails.getUsername());
		assertEquals("password", userDetails.getPassword());

	}

	@Test
	void activateUser(){
		UserApp user = new UserApp();
		user.setActive(false);

		UserAppDetails userAppDetails = new UserAppDetails();
		userAppDetails.setFullname("Asep Supriyadi");

		user.setUserDetails(userAppDetails);

		userAppService.activateUser(user);
		Mockito.when(userAppRepository.save(user)).thenReturn(user);
		assertTrue(user.isActive());
	}

	@Test
	public void testAddMeals() throws IOException {
		Meals meals = new Meals();
		meals.setMealsName("Hamburger");
		meals.setStock(5);
		Mockito.when(mealsRepository.save(any(Meals.class))).thenReturn(meals);
		Meals result = mealsServices.addMeals(meals);
		Mockito.verify(mealsRepository, times(1)).save(any(Meals.class));
	}

	@Test
	public void testFrozen() {
		// Setup
		Order order = new Order();
		order.setFarFromPartner(false);
		order.setWeekEnd(true);

		Order checkOrder = orderServices.checkDistance(order);
		Mockito.when(orderRepository.save(checkOrder)).thenReturn(order);

		assertTrue(checkOrder.isFrozen());
	}

	@Test
	public void testFrozen2() {
		// Setup
		Order order = new Order();
		order.setFarFromPartner(true);
		order.setWeekEnd(false);
		Order checkOrder = orderServices.checkDistance(order);
		Mockito.when(orderRepository.save(checkOrder)).thenReturn(order);
		assertTrue(checkOrder.isFrozen());
	}

	@Test
	public void testFrozen3() {
		// Setup
		Order order = new Order();
		order.setFarFromPartner(false);
		order.setWeekEnd(false);
		Order checkOrder = orderServices.checkDistance(order);
		Mockito.when(orderRepository.save(checkOrder)).thenReturn(order);
		assertFalse(checkOrder.isFrozen());
	}


}
