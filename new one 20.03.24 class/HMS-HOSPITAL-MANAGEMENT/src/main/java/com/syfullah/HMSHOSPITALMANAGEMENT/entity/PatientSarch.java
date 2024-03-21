package com.syfullah.HMSHOSPITALMANAGEMENT.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PatientSarch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;



    private String name;

    private String age;

    private String phone;


    @ManyToOne
    @JoinColumn(name = "doctor_name")
    private Doctor doctorsId;


    @ManyToOne
    @JoinColumn(name = "appointmentsId")
    private Appointments appointments;


}
