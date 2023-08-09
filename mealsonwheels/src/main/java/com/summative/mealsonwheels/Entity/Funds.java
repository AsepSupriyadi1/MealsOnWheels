package com.summative.mealsonwheels.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


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
    
    private Date dateTime;
    private Double donorAmount;

    @ManyToOne
    @JoinColumn(name = "user_details_id")
    private UserAppDetails userDetails;

}
