package com.summative.mealsonwheels.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import com.summative.mealsonwheels.Entity.constrant.DeliveryStatus;
import com.summative.mealsonwheels.Entity.constrant.MealsStatus;
import com.summative.mealsonwheels.Entity.constrant.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_order")
public class Order {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    // @Column(name = "invoice_code")
    // private String invoiceCode;
    
    private Date datetime;

    private Date updated_at;

    private Double distance;

    @ManyToOne
    @JoinColumn(name = "meals")
    private Meals meals;

    @ManyToOne
    @JoinColumn(name = "member")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "partner")
    private UserAppDetails partner;

    @ManyToOne
    @JoinColumn(name = "driver")
    private UserAppDetails driver;


    @Enumerated(EnumType.STRING)
    @Column(name = "order_status")
    private OrderStatus status;


    @Enumerated(EnumType.STRING)
    @Column(name = "meals_status")
    private MealsStatus mealsStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_status")
    private DeliveryStatus deliveryStatus;


    private boolean isFrozen;

    private boolean isWeekEnd;
    private boolean isFarFromPartner;

    private String feedback;






}
