package com.syfullah.HMSHOSPITALMANAGEMENT.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Discharge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dischargeId;
    private String name;
    private int age;
    private Date admissiondate;
    private Date dischargeDate;
    private int admitade_dayse;
    private String dischargeSummary;

    @ManyToOne
    @JoinColumn(name = "admissionId")
    private Admission admission;


}
