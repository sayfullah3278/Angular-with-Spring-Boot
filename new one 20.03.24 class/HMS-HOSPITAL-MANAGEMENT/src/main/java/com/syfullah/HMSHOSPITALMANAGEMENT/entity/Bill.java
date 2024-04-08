package com.syfullah.HMSHOSPITALMANAGEMENT.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int billId;

    private String passent_name;

    private String age;

    private String admition_date;

    private String discharg_date;

    private double admitedDays;

    private double daily_cost;

    private double total_amount;

    private double paid_amount;

    private double due_amount;

    private String paymentMethod;

    @ManyToOne
    private Admission admissionId;





}
