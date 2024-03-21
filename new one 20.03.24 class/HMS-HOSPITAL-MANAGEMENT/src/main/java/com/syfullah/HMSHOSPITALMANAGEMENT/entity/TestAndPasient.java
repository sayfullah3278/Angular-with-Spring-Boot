package com.syfullah.HMSHOSPITALMANAGEMENT.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "testAndPasient")
public class TestAndPasient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String pasentName;

    private String refferal;

    private String contact;

    private Double totalAmount;

    private Double dueAmount;

    private Double paidAmount;

    private String delevery_time;


}
