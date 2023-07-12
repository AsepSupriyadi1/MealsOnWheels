package com.summative.mealsonwheels.Entity;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_users_details")
public class UserAppDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_details_id")
    private Long userDetailsId;

    @Column(nullable = false, name = "full_name")
    private String fullname;

    @Column(nullable = false, name = "address")
    private String address;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserApp user;

    @JsonIgnore
    @OneToMany(mappedBy = "userDetails")
    private List<Funds> funds;
    
    @JsonIgnore
    @OneToOne(mappedBy = "userDetails")
    private Volunteer volunteer;
    
    @JsonIgnore
    @OneToOne(mappedBy = "userDetails")
    private Member member;

    @JsonIgnore
    @OneToOne(mappedBy = "userDetails")
    private Driver driver;

    @JsonIgnore
    @OneToOne(mappedBy = "userDetails")
    private Partner partner;

}