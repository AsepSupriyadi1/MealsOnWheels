package com.summative.mealsonwheels.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.Driver;
import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.UserRole;
import com.summative.mealsonwheels.Exception.UserNotActiveException;
import com.summative.mealsonwheels.Repositories.UserAppRepository;

@Service
public class UserAppService implements UserDetailsService {

    @Autowired
    private UserAppRepository userAppRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserApp user = userAppRepo.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + email));

		if(!user.isActive()) throw new UserNotActiveException(user.getUserRole().name());

		return new User(user.getUsername(), user.getPassword(),
				user.getAuthorities());
    }

    public UserApp save(UserApp user) {

		// Cek Apakah User Email Is Exist ?

		boolean userExist = userAppRepo.findByEmail(user.getEmail()).isPresent();
		if (userExist) {
			throw new RuntimeException(String.format("user with email '%s' already exist", user.getEmail()));
		}

		// HASH PASSWORD
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);

		return userAppRepo.save(user);
	}

	public UserApp update(UserApp user) {

		return userAppRepo.save(user);
		
	}


    
	public UserApp findUserById(Long id) {
		return userAppRepo.findById(id).get();
	}
	
	public List<UserApp> getAllUsers(){
		return userAppRepo.findAll();
	}


	public List<UserApp> getAllInactiveUser(){
		return userAppRepo.getAllInactiveUsers();
	}

	public List<UserApp> findAllActiveUsers(UserRole role){
		return userAppRepo.getAllActiveUsers(role);
	}

    public UserApp findUserByEmail(String email) throws UsernameNotFoundException {
        UserApp user = userAppRepo.findByEmail(email).get();
		return user;
    }


	public UserApp getCurrentUser() {
        String currentUserEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("currentuser: " + currentUserEmail);
        return userAppRepo.findByEmail(currentUserEmail).orElseThrow(()-> new UsernameNotFoundException("current user not found"));
    }

}







    

