package com.summative.mealsonwheels.Entity;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

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

    private String phoneNumber;


//    @Column(nullable = false, name = "address")
//    private String address;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserApp user;


    @OneToOne
    @JoinColumn(name = "address_id")
    private UserAppAddress userAppAddress;


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


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "picture_id")
    private Picture picture;

}