package com.summative.mealsonwheels.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
@Entity
@Table(name = "tb_picture")
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "picture_id")
    private Long pictureId;

    @Column(name = "image_name")
    private String imageName;

    @Lob
    @Basic(fetch = FetchType.LAZY) // Gunakan FetchType.LAZY untuk menghindari pengambilan gambar secara otomatis
    @Column(name = "image_data", columnDefinition = "LONGBLOB")
    private byte[] imageData;

    @JsonIgnore
    @OneToOne(mappedBy = "picture", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Meals meals;



    @JsonIgnore
    @OneToOne(mappedBy = "picture", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private UserAppDetails userAppDetails;

    // Constructor, getter, setter, dan metode lainnya
}