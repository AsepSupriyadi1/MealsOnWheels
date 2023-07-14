package com.summative.mealsonwheels.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "tb_meals")
public class Meals {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_meals")
    private Long mealsId;

    @Column(nullable = false)
    private String mealsName;

    @ManyToOne
    @JoinColumn(name = "partner_id")
    private Partner partner;


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "picture_id")
    private Picture picture;


    private Integer stock;


}
