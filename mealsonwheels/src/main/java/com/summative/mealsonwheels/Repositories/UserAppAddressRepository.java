package com.summative.mealsonwheels.Repositories;

import com.summative.mealsonwheels.Entity.UserAppAddress;
import com.summative.mealsonwheels.Entity.UserAppDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAppAddressRepository extends JpaRepository<UserAppAddress, Long> {

    UserAppAddress findByUserAppDetails(UserAppDetails userAppDetails);

}
