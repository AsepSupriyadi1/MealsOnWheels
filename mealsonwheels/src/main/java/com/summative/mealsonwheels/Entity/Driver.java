package com.summative.mealsonwheels.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.summative.mealsonwheels.Entity.constrant.DriverStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tb_driver")
public class Driver {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partner_id")
    private Long driverId;


    private String carName;
    // private String haveLicense;

    @Enumerated(EnumType.STRING)
    private DriverStatus driverStatus;

    @OneToOne
    @JoinColumn(name = "user_details_id")
    private UserAppDetails userDetails;


    @JsonIgnore
    @OneToMany(mappedBy = "driver")
    private List<Order> orders;

}
