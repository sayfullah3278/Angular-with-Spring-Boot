package com.syfullah.HMSHOSPITALMANAGEMENT.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "userid")
    private Long userid;

    @Column(name = "totalPrice")
    private Double totalPrice;

    @Column(name = "duePrice")
    private Double duePrice;

    @Column(name = "paidAmount")
    private Double paidAmounts;


    @OneToMany(mappedBy = "cart")
    // Assuming a mappedBy relationship
    private List<TestCart> testCart;
//   private List<TestCart> testCarts = new ArrayList<>();
}
