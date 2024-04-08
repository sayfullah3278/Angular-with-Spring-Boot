package com.syfullah.HMSHOSPITALMANAGEMENT.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Appointments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int appointmentId;


    private  String name;


    private  String email;



    private  String phone;


    private Date date;


    private  String department;

    @Column(name = "doctor_name")
    private  String doctorName;


    private  String disease;

    @ManyToOne
    @JoinColumn(name = "doctorId")
    private Doctor doctorsId;


//    public PatientSarch getPatient(int patientId) {
//        PatientSarchRepo patientSarchRepo = new PatientSarchRepo(); // Instantiate the repository
//        return patientSarchRepo.findPatientById(patientId);
//    }

    public PatientSarch getPatient(int appointmentId){
        return this.getPatient(appointmentId);
    }
//public PatientSarch getPatient(){
//    // Sample logic to retrieve patient data (replace this with your actual implementation)
//    PatientSarch patient = patiensarchtRepo.findPatientById(123); // Assuming you have a patient repository
//
//    return patient;
//}

}
