package com.summative.mealsonwheels.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_volunteers")
public class Volunteer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long volunteerId;
    private String reason;
    private String status;
    
    @OneToOne
    @JoinColumn(name = "user_details_id")
    private UserAppDetails userDetails;

}
