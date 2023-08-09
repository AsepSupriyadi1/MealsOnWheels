package com.summative.mealsonwheels.Controllers;

import com.summative.mealsonwheels.Entity.UserAppAddress;
import com.summative.mealsonwheels.Entity.constrant.VolunteerStatus;
import com.summative.mealsonwheels.Repositories.*;
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
import com.summative.mealsonwheels.Dto.EntityRequest.AuthenticationRequest;
import com.summative.mealsonwheels.Dto.EntityResponse.AuthenticationResponse;
import com.summative.mealsonwheels.Dto.EntityRequest.UserAppDetailsDto;
import com.summative.mealsonwheels.Dto.ResponseData;
import com.summative.mealsonwheels.Dto.UserResponse;
import com.summative.mealsonwheels.Entity.Tokens;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;
import com.summative.mealsonwheels.Entity.constrant.TokenType;
import com.summative.mealsonwheels.Exception.UserNotActiveException;
import com.summative.mealsonwheels.Services.DriverServices;
import com.summative.mealsonwheels.Services.PartnerService;
import com.summative.mealsonwheels.Services.TokensService;
import com.summative.mealsonwheels.Services.UserAppService;

import jakarta.servlet.http.HttpServletRequest;

import java.util.Base64;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {


    @Autowired
    private UserAppService userAppService;

    @Autowired
    private UserAppRepository userAppRepository;

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


    @Autowired
    private UserAppAddressRepository addressRepository;


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest loginRequest) {

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

        } catch (BadCredentialsException e) {
            authenticationResponse.setErrorType("NOT_FOUND");
            authenticationResponse.setErrorMessage("Invalid username or password !");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        } catch (UserNotActiveException e) {
            authenticationResponse.setErrorType("NOT_ACTIVE");
            authenticationResponse.setErrorMessage("Your account still awaiting for admin approval");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        }


    }

    @PostMapping(value = "/register")
    public ResponseEntity<ResponseData<UserAppDetailsDto>> registerUser(@RequestBody UserAppDetailsDto registerRequest) {

        ResponseData<UserAppDetailsDto> responseData = new ResponseData<>();

        try {
            // Cek apakah email sudah digunakan oleh pengguna lain
            boolean existingUser = userAppRepository.findByEmail(registerRequest.getUserApp().getEmail()).isPresent();
            if (existingUser) {
                throw new IllegalArgumentException("Email already exists");
            }

            if (registerRequest.getUserDetails() == null || registerRequest.getAddress() == null) {
                throw new IllegalArgumentException("User details or address not provided");
            }


            String userRole = registerRequest.getUserApp().getUserRole().name();

            // CHECK IF THE REGISTERED USER IS MEMBER / DONOR then activate the account
            if (userRole.equals("DONOR")) {
                registerRequest.getUserApp().setActive(true);
            }

            // SAVE THE USERS and Address
            UserApp user = registerRequest.getUserApp();
            userAppService.save(registerRequest.getUserApp());


            UserAppAddress address = registerRequest.getAddress();
            addressRepository.save(address);


            // SAVE THE USER DETAILS
            UserAppDetails details = registerRequest.getUserDetails();
            details.setUser(registerRequest.getUserApp());
            details.setUserAppAddress(registerRequest.getAddress());
            userDetailsRepository.save(details);


            // CHECK IF THE REGISTERED NO ENTERING THE ROLE DETAILS
            if (
                    userRole.equals("PARTNER") && registerRequest.getPartner() == null ||
                            userRole.equals("VOLUNTEER") && registerRequest.getVolunteer() == null ||
                            userRole.equals("DRIVER") && registerRequest.getDriver() == null ||
                            userRole.equals("MEMBER") && registerRequest.getMember() == null
            ) {
                throw new IllegalArgumentException("User Role details not provided");
            }

            // CHECK IF THE REGISTERED USER IS PARTNER
            if (userRole.equals("PARTNER")) {
                registerRequest.getPartner().setUserDetails(registerRequest.getUserDetails());
                partnerService.save(registerRequest.getPartner());
            }

            // CHECK IF THE REGISTERED USER IS DRIVER
            if (userRole.equals("DRIVER")) {
                registerRequest.getDriver().setUserDetails(registerRequest.getUserDetails());
                registerRequest.getDriver().setDriverStatus(DriverStatus.AVAILABLE);
                driverServices.save(registerRequest.getDriver());
            }

            // CHECK IF THE REGISTERED USER IS MEMBER
            if (userRole.equals("MEMBER")) {
                registerRequest.getMember().setUserDetails(registerRequest.getUserDetails());
                memberRepository.save(registerRequest.getMember());
            }

            // CHECK IF THE REGISTERED USER IS VOLUNTEER
            if (userRole.equals("VOLUNTEER")) {
                registerRequest.getVolunteer().setUserDetails(registerRequest.getUserDetails());
                registerRequest.getVolunteer().setVolunteerStatus(VolunteerStatus.AVAILABLE);
                volunteerRepository.save(registerRequest.getVolunteer());
            }

            responseData.setPayload(registerRequest);
            responseData.setMessages("User Registered Successfully!");
            responseData.setStatus(true);
            return ResponseEntity.ok(responseData);

        } catch (Exception e) {
            responseData.setStatus(false);
            responseData.setMessages(e.getMessage());
            responseData.setPayload(null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseData);
        }
    }


    @GetMapping(value = "/user")
    public ResponseEntity<?> getUserLogin(HttpServletRequest request) {

        UserResponse userResponse = new UserResponse();

        String token = jwtService.extractTokenFromRequest(request);

        boolean isTokenValid = tokensRepository.findByToken(token).map(t ->
                        !t.isExpired() && !t.isRevoked())
                .orElse(false);

        if (isTokenValid) {
            String username = jwtService.extractUsername(token);
            UserApp user = userAppService.findUserByEmail(username);
            userResponse.setUserId(user.getUserId());
            userResponse.setFullname(user.getUserDetails().getFullname());
            userResponse.setEmail(user.getEmail());
            userResponse.setAddress(user.getUserDetails().getUserAppAddress().getLabel());
            userResponse.setUserRole(user.getUserRole().name());

            if(user.getUserDetails().getPicture() != null){
                userResponse.setPictureData(Base64.getEncoder().encodeToString(user.getUserDetails().getPicture().getImageData()));
            }

            if(user.getUserDetails().getPicture() != null){
                userResponse.setPhoneNumber(user.getUserDetails().getPhoneNumber());
            }

            userResponse.setLan(user.getUserDetails().getUserAppAddress().getLatitude());
            userResponse.setLng(user.getUserDetails().getUserAppAddress().getLongitude());

            return ResponseEntity.ok(userResponse);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("TOKEN NOT FOUND");
    }


}
