package com.summative.mealsonwheels.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Config.JwtService;
import com.summative.mealsonwheels.Dto.AuthenticationRequest;
import com.summative.mealsonwheels.Dto.AuthenticationResponse;
import com.summative.mealsonwheels.Dto.RegisterRequest;
import com.summative.mealsonwheels.Dto.ResponseData;
import com.summative.mealsonwheels.Dto.UserResponse;
import com.summative.mealsonwheels.Entity.Tokens;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.constrant.TokenType;
import com.summative.mealsonwheels.Exception.UserNotActiveException;
import com.summative.mealsonwheels.Repositories.MemberRepository;
import com.summative.mealsonwheels.Repositories.TokensRepository;
import com.summative.mealsonwheels.Repositories.UserAppDetailsRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.PartnerService;
import com.summative.mealsonwheels.Services.TokensService;
import com.summative.mealsonwheels.Services.UserAppService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    

    @Autowired 
    private UserAppService userAppService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokensRepository tokensRepository;

    @Autowired
    private TokensService tokensService;

    @Autowired 
    private JwtService jwtService;


    @Autowired
    private PartnerService partnerService;

    @Autowired
    private DriverServices driverServices;

    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private UserAppDetailsRepository userDetailsRepository;



    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest loginRequest){

        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

            UserDetails principals = userAppService.loadUserByUsername(loginRequest.getEmail());
            UserApp users = userAppService.findUserByEmail(principals.getUsername());
            
            String token = jwtService.generateToken(principals);
          
            Tokens jwtToken = Tokens.builder()
                .user(users)
                .token(token)
                .tokenType(TokenType.BEARER)
                .revoked(false)
                .expired(false)
                .build();

            tokensService.revokeAllUserTokens(users);
            tokensRepository.save(jwtToken);
            authenticationResponse.setToken(token);
            authenticationResponse.setRole(users.getUserRole().name());
            return ResponseEntity.ok(authenticationResponse);

        } catch(BadCredentialsException e) {
            authenticationResponse.setErrorType("NOT_FOUND");
            authenticationResponse.setErrorMessage("Invalid username or password !");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        } catch (UserNotActiveException e){
            authenticationResponse.setErrorType("NOT_ACTIVE");
            authenticationResponse.setErrorMessage("Your account still awaiting for admin approval");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        }

       

    } 

    @PostMapping(value = "/register")
    public ResponseEntity<ResponseData<RegisterRequest>> registerUser(@RequestBody RegisterRequest registerRequest) {
    
        ResponseData<RegisterRequest> responseData = new ResponseData<>();
    
      
    
        try {

            if (registerRequest.getUserDetails() == null) {
                throw new IllegalArgumentException("User details not provided");
            }


            String userRole = registerRequest.getUserApp().getUserRole().name();
    
            // CHECK IF THE REGISTERED USER IS MEMBER / DONOR then activate the account
            if (userRole.equals("DONOR")) {
                registerRequest.getUserApp().setActive(true);
            }


             // CHECK IF THE THE REGISTERED NO ENTERING THE ROLE DETAILS
            if (
                userRole.equals("PARTNER") &&  registerRequest.getPartner() == null  || 
                userRole.equals("VOLUNTEER") &&  registerRequest.getVolunteer() == null  || 
                userRole.equals("DRIVER") &&  registerRequest.getDriver() == null  ||
                userRole.equals("MEMBER") &&  registerRequest.getMember() == null 
            ) {
                throw new IllegalArgumentException("User Role details not provided");
            }

            
            // SAVE THE USERS
            userAppService.save(registerRequest.getUserApp());
    
            // CHECK IF THE REGISTERED USER IS PARTNER
            if (userRole.equals("PARTNER")) {
                registerRequest.getPartner().setUser(registerRequest.getUserApp());
                partnerService.save(registerRequest.getPartner());
            }
    
            // CHECK IF THE REGISTERED USER IS DRIVER
            if (userRole.equals("DRIVER")) {
                registerRequest.getDriver().setUser(registerRequest.getUserApp());
                driverServices.save(registerRequest.getDriver());
            }
    
            // CHECK IF THE REGISTERED USER IS MEMBER
            if (userRole.equals("MEMBER")) {
                registerRequest.getMember().setUser(registerRequest.getUserApp());
                memberRepository.save(registerRequest.getMember());
            }
    
            // CHECK IF THE REGISTERED USER IS VOLUNTEER
            if (userRole.equals("VOLUNTEER")) {
                registerRequest.getVolunteer().setUser(registerRequest.getUserApp());
                volunteerRepository.save(registerRequest.getVolunteer());
            }
    
    
            // SAVE THE USER DETAILS
            UserAppDetails details = registerRequest.getUserDetails();
            details.setUser(registerRequest.getUserApp());
            userDetailsRepository.save(details);
    
            responseData.setPayload(registerRequest);
    
        } catch (Exception e) {
            responseData.setStatus(false);
            responseData.setMessages(e.getMessage());
            responseData.setPayload(null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseData);
        }
    
        responseData.setMessages("User Registered Successfully!");
        responseData.setStatus(true);
        return ResponseEntity.ok(responseData);
    }



    @GetMapping(value = "/user")
    public ResponseEntity<?> getUserLogin(HttpServletRequest request) {

        UserResponse userResponse = new UserResponse();
      
        String token = jwtService.extractTokenFromRequest(request);
       
        boolean isTokenValid = tokensRepository.findByToken(token).map(t -> 
                        !t.isExpired() && !t.isRevoked())
                        .orElse(false);

        if(isTokenValid){
            String username = jwtService.extractUsername(token);
            UserApp user =  userAppService.findUserByEmail(username);
            userResponse.setUserId(user.getUserId());
            userResponse.setFullname(user.getUserDetails().getFullname());
            userResponse.setEmail(user.getEmail());
            userResponse.setAddress(user.getUserDetails().getAddress());
            userResponse.setUserRole(user.getUserRole().name());
            
            return ResponseEntity.ok(userResponse);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("TOKEN NOT FOUND");
    } 


}
