package com.summative.mealsonwheels.Services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.summative.mealsonwheels.Dto.EntityResponse.AssignUser;
import com.summative.mealsonwheels.Entity.UserAppAddress;
import com.summative.mealsonwheels.Repositories.DriverRepository;
import com.summative.mealsonwheels.Repositories.PartnerRepository;
import com.summative.mealsonwheels.Repositories.VolunteerRepository;
import com.summative.mealsonwheels.utils.HaversineDistanceCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.summative.mealsonwheels.Entity.UserApp;
import com.summative.mealsonwheels.Entity.constrant.UserRole;
import com.summative.mealsonwheels.Exception.UserNotActiveException;
import com.summative.mealsonwheels.Repositories.UserAppRepository;

@Service
public class UserAppService implements UserDetailsService {

    @Autowired
    private UserAppRepository userAppRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private DriverRepository driverRepository;

	@Autowired
	private PartnerRepository partnerRepository;

	@Autowired
	private VolunteerRepository volunteerRepository;

	@Autowired
	private HaversineDistanceCalculator haversineDistanceCalculator;


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

//



	public List<AssignUser> getAllAvailableDriver(){

		List<AssignUser> listAvailableDriver = new ArrayList<>();
		List<AssignUser> listAvailableVolunteer = new ArrayList<>();
		UserAppAddress currentUserAddress = getCurrentUser().getUserDetails().getUserAppAddress();
		double userX = currentUserAddress.getLatitude();
		double userY = currentUserAddress.getLongitude();

		driverRepository.getAllAvailableDriver().forEach((x) -> {

			double driverX = x.getUserDetails().getUserAppAddress().getLatitude();
			double driverY = x.getUserDetails().getUserAppAddress().getLongitude();
			double  distance = haversineDistanceCalculator.calculateDistance(userX, userY, driverX, driverY);

			AssignUser assignDriver = AssignUser.builder()
					.userName(x.getUserDetails().getFullname())
					.userId(x.getUserDetails().getUser().getUserId())
					.driverStatus(x.getUserDetails().getDriver().getDriverStatus().name())
					.distance(Math.round(distance))
					.build();

			listAvailableDriver.add(assignDriver);

		});

		volunteerRepository.getAllAvailableVolunteer().forEach((x) -> {

			double volunteerX = x.getUserDetails().getUserAppAddress().getLatitude();
			double volunteerY = x.getUserDetails().getUserAppAddress().getLongitude();
			double  distance = haversineDistanceCalculator.calculateDistance(userX, userY, volunteerX, volunteerY);

			AssignUser assignVolunteer = AssignUser.builder()
					.userName(x.getUserDetails().getFullname())
					.userId(x.getUserDetails().getUser().getUserId())
					.volunteerStatus(x.getUserDetails().getVolunteer().getVolunteerStatus().name())
					.distance(Math.round(distance))
					.build();

			listAvailableVolunteer.add(assignVolunteer);

		});


		List<AssignUser> combineList = new ArrayList<>();
		combineList.addAll(listAvailableDriver);
		combineList.addAll(listAvailableVolunteer);
		combineList.sort(Comparator.comparingDouble(AssignUser::getDistance));

		return combineList;

	}

	public List<AssignUser> getAllAvailableKitchen(){

		List<AssignUser> listAvailablePartner = new ArrayList<>();
		List<AssignUser> listAvailableVolunteer = new ArrayList<>();
		UserAppAddress currentUserAddress = getCurrentUser().getUserDetails().getUserAppAddress();
		double userX = currentUserAddress.getLatitude();
		double userY = currentUserAddress.getLongitude();



		partnerRepository.getAllAvailablePartner().forEach((x) -> {

			double partnerX = x.getUserDetails().getUserAppAddress().getLatitude();
			double partnerY = x.getUserDetails().getUserAppAddress().getLongitude();
			double  distance = haversineDistanceCalculator.calculateDistance(userX, userY, partnerX, partnerY);

			AssignUser assignPartner = AssignUser.builder()
					.userId(x.getUserDetails().getUser().getUserId())
					.userName(x.getUserDetails().getFullname())
					.distance(Math.round(distance))
					.build();

			listAvailablePartner.add(assignPartner);

		});


		volunteerRepository.getAllAvailableVolunteer().forEach((x) -> {

			double volunteerX = x.getUserDetails().getUserAppAddress().getLatitude();
			double volunteerY = x.getUserDetails().getUserAppAddress().getLongitude();
			double  distance = haversineDistanceCalculator.calculateDistance(userX, userY, volunteerX, volunteerY);

			AssignUser assignVolunteer = AssignUser.builder()
					.userName(x.getUserDetails().getFullname())
					.userId(x.getUserDetails().getUser().getUserId())
					.volunteerStatus(x.getUserDetails().getVolunteer().getVolunteerStatus().name())
					.distance(Math.round(distance))
					.build();

			listAvailableVolunteer.add(assignVolunteer);

		});


		List<AssignUser> combineList = new ArrayList<>();
		combineList.addAll(listAvailablePartner);
		combineList.addAll(listAvailableVolunteer);
		combineList.sort(Comparator.comparingDouble(AssignUser::getDistance));
		return combineList;


	}



}







    

