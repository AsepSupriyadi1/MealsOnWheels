package com.summative.mealsonwheels.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.summative.mealsonwheels.Entity.constrant.PartnerStatus;

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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_partner")
public class Partner {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partner_id")
    private Long partnerId;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_address")
    private String companyAddress;


    @Enumerated(EnumType.STRING)
    private PartnerStatus partnerStatus;

    @OneToOne
    @JoinColumn(name = "user_details_id")
    private UserAppDetails userDetails;

    @JsonIgnore
    @OneToMany(mappedBy = "partner")
    private List<Order> orders;

    
}
