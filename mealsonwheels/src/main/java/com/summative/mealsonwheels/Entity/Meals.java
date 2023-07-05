package com.summative.mealsonwheels.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "tb_meals")
public class Meals {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_meals;

    @Column(nullable = false)
    private String meals_name;

    @Column(nullable = false)
    private String meals_desc;

    @Column(nullable = false)
    private String amount;

}
