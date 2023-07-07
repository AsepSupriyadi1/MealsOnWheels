package com.summative.mealsonwheels.Repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.summative.mealsonwheels.Entity.Partner;


public interface PartnerRepository extends JpaRepository<Partner, Long> {


    @Query("SELECT p FROM Partner p JOIN p.user u WHERE u.isActive = :isActive")
    List<Partner> findActivePartners(@Param("isActive") boolean isActive);

}
