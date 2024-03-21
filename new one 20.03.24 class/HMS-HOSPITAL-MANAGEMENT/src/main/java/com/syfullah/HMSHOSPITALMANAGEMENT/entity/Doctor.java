package com.syfullah.HMSHOSPITALMANAGEMENT.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int doctorId;

    private  String doctorName;

    private  String phone;

    private  String department;

    private  String specilization;

    private  String qualification;

    private  String experience;

    private Date joiningDate;
    private Double doctorFee;


    public Doctor(int doctorId) {
        this.doctorId = doctorId;
    }
}
