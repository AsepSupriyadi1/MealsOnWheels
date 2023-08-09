package com.summative.mealsonwheels;

import com.summative.mealsonwheels.Dto.MessageResponse;
import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.Order;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.constrant.DeliveryStatus;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;
import com.summative.mealsonwheels.Entity.constrant.MealsStatus;
import com.summative.mealsonwheels.Entity.constrant.UserRole;
import com.summative.mealsonwheels.Repositories.*;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.MealsServices;
import com.summative.mealsonwheels.Services.OrderServices;
import com.summative.mealsonwheels.Services.UserAppService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;

@SpringBootTest
public class DriverMowTest {


    @Autowired
    private UserAppService userAppService;

    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private OrderServices orderServices;

    @Autowired
    private DriverServices driverServices;

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

    @MockBean
    private DriverRepository driverRepository;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void testLogin() {
        // Setup
        UserApp user = new UserApp();
        user.setEmail("driver@mow.com");
        user.setPassword("password");
        user.setActive(true);
        user.setUserRole(UserRole.DRIVER);

        Mockito.when(userAppRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

        // Call the method
        UserDetails userDetails = userAppService.loadUserByUsername("driver@mow.com");

        // Assertions
        assertNotNull(userDetails);
        assertEquals("driver@mow.com", userDetails.getUsername());
        assertEquals("password", userDetails.getPassword());

    }


    @Test
    public void testRegister() {
        // Setup
        UserApp user = new UserApp();
        user.setEmail("driver@mow.com");
        user.setPassword("password");
        user.setActive(true);
        user.setUserRole(UserRole.DRIVER);

        UserAppDetails userAppDetails = new UserAppDetails();
        userAppDetails.setFullname("Driver MOw");
        userAppDetails.setUser(user);

        Driver driver = new Driver();
        driver.setCarName("AVANZA");
        driver.setDriverStatus(DriverStatus.AVAILABLE);


        Mockito.when(userAppRepository.save(user)).thenReturn(user);
        Mockito.when(userAppDetailsRepository.save(userAppDetails)).thenReturn(userAppDetails);
        Mockito.when(driverRepository.save(driver)).thenReturn(driver);


        assertNotNull(user);
        assertNotNull(userAppDetails);
        assertNotNull(driver);
        assertEquals("Driver MOw", userAppDetails.getFullname());
        assertEquals("AVANZA", driver.getCarName());

    }


    @Test
    public void testUpdateToTakeMeals() {
        // Setup
        UserApp user = new UserApp();
        user.setUserRole(UserRole.DRIVER);

        Driver driver = new Driver();
        UserAppDetails userAppDetails = new UserAppDetails();

        driver.setDriverStatus(DriverStatus.UNAVAILABLE);
        driver.setUserDetails(userAppDetails);


        userAppDetails.setFullname("Driver MOw");
        userAppDetails.setUser(user);
        userAppDetails.setDriver(driver);


        Order order = new Order();
        order.setDeliveryStatus(DeliveryStatus.PENDING);
        order.setMealsStatus(MealsStatus.PENDING);
        order.setDriver(driver.getUserDetails());

        Mockito.when(orderRepository.save(order)).thenReturn(order);
        Mockito.when(driverServices.save(any())).thenReturn(driver.getUserDetails().getDriver());


        orderServices.updateDeliveryStatus(order, userAppDetails, "TAKE_MEALS");


        assertEquals(DeliveryStatus.TAKE_MEALS, order.getDeliveryStatus());
        assertEquals(DriverStatus.UNAVAILABLE, driver.getDriverStatus());

    }

    @Test
    public void testUpdateToOnTheWayError() {
        // Setup
        UserApp user = new UserApp();
        user.setUserRole(UserRole.DRIVER);

        Driver driver = new Driver();
        UserAppDetails userAppDetails = new UserAppDetails();

        driver.setDriverStatus(DriverStatus.UNAVAILABLE);
        driver.setUserDetails(userAppDetails);


        userAppDetails.setFullname("Driver MOw");
        userAppDetails.setUser(user);
        userAppDetails.setDriver(driver);


        Order order = new Order();
        order.setDeliveryStatus(DeliveryStatus.TAKE_MEALS);
        order.setMealsStatus(MealsStatus.PENDING);
        order.setDriver(driver.getUserDetails());

        Mockito.when(orderRepository.save(order)).thenReturn(order);
        Mockito.when(driverServices.save(any())).thenReturn(driver.getUserDetails().getDriver());

        MessageResponse messageResponse = new MessageResponse();

        try {
            orderServices.updateDeliveryStatus(order, userAppDetails, "ON_THE_WAY");
        } catch (Exception e) {
            assertEquals("MEALS STILL UNDER PREPARATION !", e.getMessage());
        }


    }


    @Test
    public void testUpdateToOnTheWaySuccess() {
        // Setup
        UserApp user = new UserApp();
        user.setUserRole(UserRole.DRIVER);

        Driver driver = new Driver();
        UserAppDetails userAppDetails = new UserAppDetails();

        driver.setDriverStatus(DriverStatus.UNAVAILABLE);
        driver.setUserDetails(userAppDetails);


        userAppDetails.setFullname("Driver MOw");
        userAppDetails.setUser(user);
        userAppDetails.setDriver(driver);


        Order order = new Order();
        order.setDeliveryStatus(DeliveryStatus.TAKE_MEALS);
        order.setMealsStatus(MealsStatus.READY_TO_DELIVER);
        order.setDriver(driver.getUserDetails());

        Mockito.when(orderRepository.save(order)).thenReturn(order);
        Mockito.when(driverServices.save(any())).thenReturn(driver.getUserDetails().getDriver());


        orderServices.updateDeliveryStatus(order, userAppDetails, "ON_THE_WAY");

        assertEquals(DeliveryStatus.ON_THE_WAY, order.getDeliveryStatus());

    }


}
