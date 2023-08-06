package com.summative.mealsonwheels.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_user_address")
public class UserAppAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long addressId;

    private String village;
    private String county;
    private String state;
    private String country;
    private String label;
    private double latitude;
    private double longitude;

    @JsonIgnore
    @OneToOne(mappedBy = "userAppAddress")
    private UserAppDetails userAppDetails;

}
