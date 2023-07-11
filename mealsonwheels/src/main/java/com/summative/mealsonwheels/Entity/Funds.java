package com.summative.mealsonwheels.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_funds")
public class Funds {


    // FUNDS INFORMATION
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donorId;
    
    private String dateTime;
    private Double donorAmount;


    // USER DETAILS
    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Long senderId;

    @Column(nullable = false)
    private String status;

   
    // FOREIGN KEYS
    @OneToOne
    @JoinColumn(name = "user_details_id")
    private UserAppDetails userDetails;

}
