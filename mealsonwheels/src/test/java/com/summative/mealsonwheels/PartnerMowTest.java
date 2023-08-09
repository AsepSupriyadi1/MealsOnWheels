package com.summative.mealsonwheels;


import com.summative.mealsonwheels.Entity.*;
import com.summative.mealsonwheels.Entity.constrant.*;
import com.summative.mealsonwheels.Repositories.*;
import com.summative.mealsonwheels.Services.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;

@SpringBootTest
public class PartnerMowTest {


    @Autowired
    private UserAppService userAppService;

    @Autowired
    private MealsServices mealsServices;

    @Autowired
    private OrderServices orderServices;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private PartnerService partnerService;

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
    private PartnerRepository partnerRepository;




    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void testLogin() {
        // Setup
        UserApp user = new UserApp();
        user.setEmail("partner@mow.com");
        user.setPassword("password");
        user.setActive(true);
        user.setUserRole(UserRole.PARTNER);

        Mockito.when(userAppRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

        // Call the method
        UserDetails userDetails = userAppService.loadUserByUsername("partner@mow.com");

        // Assertions
        assertNotNull(userDetails);
        assertEquals("partner@mow.com", userDetails.getUsername());
        assertEquals("password", userDetails.getPassword());

    }


    @Test
    public void testRegister() {
        // Setup
        UserApp user = new UserApp();
        user.setEmail("partner@mow.com");
        user.setPassword("password");
        user.setActive(true);
        user.setUserRole(UserRole.PARTNER);

        UserAppDetails userAppDetails = new UserAppDetails();
        userAppDetails.setFullname("Partner MOw");
        userAppDetails.setUser(user);

        Partner partner = new Partner();
        partner.setCompanyName("ABC PARTNER");
        partner.setUserDetails(userAppDetails);


        Mockito.when(userAppRepository.save(user)).thenReturn(user);
        Mockito.when(userAppDetailsRepository.save(userAppDetails)).thenReturn(userAppDetails);
        Mockito.when(partnerRepository.save(partner)).thenReturn(partner);


        assertNotNull(user);
        assertNotNull(userAppDetails);
        assertNotNull(partner);
        assertEquals("Partner MOw", userAppDetails.getFullname());
        assertEquals("ABC PARTNER", partner.getCompanyName());

    }


    @Test
    public void processMeals() {

        Order order = new Order();
        order.setMealsStatus(MealsStatus.PENDING);
        order.setStatus(OrderStatus.PENDING);

        Mockito.when(orderRepository.save(order)).thenReturn(order);

        partnerService.proceedMeals(order, "PROCESS");


        assertEquals(MealsStatus.PROCESS, order.getMealsStatus());
        assertEquals(OrderStatus.PROCESS, order.getStatus());


    }

    @Test
    public void mealsReadyToDeliver() {

        Order order = new Order();
        order.setMealsStatus(MealsStatus.PROCESS);
        order.setStatus(OrderStatus.PROCESS);

        Mockito.when(orderRepository.save(order)).thenReturn(order);

        partnerService.proceedMeals(order, "READY_TO_DELIVER");

        assertEquals(MealsStatus.READY_TO_DELIVER, order.getMealsStatus());

    }



    @Test
    public void getAllPartnerTask() {
        UserAppDetails testPartner = new UserAppDetails();

        List<Order> expectedOrders = new ArrayList<>();

        Meals meals = new Meals();
        meals.setMealsName("Batagor");
        meals.setStock(5);


        Order order1 = new Order();
        order1.setPartner(testPartner);
        order1.setMeals(meals);

        Order order2 = new Order();
        order1.setPartner(testPartner);
        order1.setMeals(meals);

        expectedOrders.add(order1);
        expectedOrders.add(order2);

        Mockito.when(orderRepository.findByPartner(Mockito.any(UserAppDetails.class))).thenReturn(expectedOrders);
        List<Order> orders = orderRepository.findByPartner(testPartner);
        assertEquals(expectedOrders, orders);

    }





}
