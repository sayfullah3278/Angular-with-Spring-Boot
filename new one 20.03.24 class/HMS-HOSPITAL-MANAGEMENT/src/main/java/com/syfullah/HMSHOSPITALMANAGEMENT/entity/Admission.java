package com.syfullah.HMSHOSPITALMANAGEMENT.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.OffsetDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "admission")
public class Admission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admissionId;

    private String name;

    private String email;

    private String phone;

    private int age;

    private String sex;

    private String bloodGroup;

    private String department;

    private String doctor;

    private String diseaseDescription;

    private Date admissionDate;

    private String emergencyContactNumber;

    private String relationshipWithPatient;

    @ManyToOne
    @JoinColumn(name = "doctorId")
    private Doctor doctorsId;

    @ManyToOne
    @JoinColumn(name = "bedId")
    private BadeManage badeManage;

    public Admission(int admissionId) {
        this.admissionId = admissionId;
    }
}
