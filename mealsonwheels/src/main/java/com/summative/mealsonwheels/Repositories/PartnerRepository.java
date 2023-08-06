package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Partner;
import org.springframework.data.jpa.repository.Query;


public interface PartnerRepository extends JpaRepository<Partner, Long> {

    @Query("SELECT COUNT(d) FROM Partner d INNER JOIN d.userDetails ud WHERE ud.user.isActive = true")
    Long countActivePartner();

}
