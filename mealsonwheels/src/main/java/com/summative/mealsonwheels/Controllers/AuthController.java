package com.summative.mealsonwheels.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.summative.mealsonwheels.Config.JwtService;
import com.summative.mealsonwheels.Dto.AuthenticationRequest;
import com.summative.mealsonwheels.Dto.AuthenticationResponse;
import com.summative.mealsonwheels.Dto.ResponseData;
import com.summative.mealsonwheels.Entity.TokenType;
import com.summative.mealsonwheels.Entity.Tokens;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Repositories.TokensRepository;
import com.summative.mealsonwheels.Services.TokensService;
import com.summative.mealsonwheels.Services.UserAppService;

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
            return ResponseEntity.ok(authenticationResponse);

        } catch(Exception e) {
            authenticationResponse.setToken(e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        }

       

    } 


    @PostMapping(value = "/register")
	public ResponseEntity<ResponseData<UserApp>> registerUser(@RequestBody UserApp user) {

		ResponseData<UserApp> responseData = new ResponseData<UserApp>();

		try {
			responseData.setPayload(userAppService.save(user));
		} catch (Exception e) {
			responseData.setStatus(false);
			responseData.setMessages("Errors Occured");
			responseData.setPayload(null);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseData);
		}

		responseData.setStatus(true);
		return ResponseEntity.ok(responseData);

	}


    @GetMapping(value = "/test")
	public String test() {
        return "String";
	}


}
