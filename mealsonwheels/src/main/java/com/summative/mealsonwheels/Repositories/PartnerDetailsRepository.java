package com.summative.mealsonwheels.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.Partner;

public interface PartnerDetailsRepository extends JpaRepository<Partner, Long> {
    
}
