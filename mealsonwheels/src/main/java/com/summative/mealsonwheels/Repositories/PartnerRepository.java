package com.summative.mealsonwheels.Repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.summative.mealsonwheels.Entity.Partner;
import com.summative.mealsonwheels.Entity.UserApp;


public interface PartnerRepository extends JpaRepository<Partner, Long> {


    @Query("SELECT p FROM Partner p JOIN p.user u WHERE u.isActive = true")
    List<Partner> getAllActivePartner();


    Optional<Partner> findPartnerByUser(UserApp user);

}
