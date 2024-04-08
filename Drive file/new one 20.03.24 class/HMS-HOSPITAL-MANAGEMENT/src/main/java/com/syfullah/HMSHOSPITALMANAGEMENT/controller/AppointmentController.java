package com.syfullah.HMSHOSPITALMANAGEMENT.controller;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Appointments;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AppointmentRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.DoctorRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.print.Doc;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointment")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;
    private final AppointmentRepo appointmentRepo;
    private final DoctorRepo doctorRepo;



    // Create an appointment
    @PostMapping("")
    public ResponseEntity<Appointments> createAppointment(@RequestBody Appointments appointment) {



        Appointments createdAppointment = appointmentService.createAppointment(appointment);
        return new ResponseEntity<>(createdAppointment, HttpStatus.CREATED);
    }

    // Get an appointment by id
    @GetMapping("/{id}")
    public ResponseEntity<Appointments> getAppointmentById(@PathVariable("id") int appointment_id) {
        Appointments appointment = appointmentService.getAppointmentById(appointment_id);
        if (appointment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }

    // Update an appointment by id
    @PutMapping("/{id}")
    public ResponseEntity<Appointments> updateAppointment(@PathVariable("id") int appointment_id, @RequestBody Appointments updatedAppointment) {
        Appointments appointment = appointmentService.updateAppointment(appointment_id, updatedAppointment);
        if (appointment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }

    // Delete an appointment by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable("id") int appointment_id) {
        appointmentService.deleteAppointment(appointment_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Get all appointments
    @GetMapping("")
    public ResponseEntity<List<Appointments>> getAllAppointments() {
        List<Appointments> appointments = appointmentService.getAllAppointments();
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    // Get doctors by department in appointments
    @GetMapping("/search")
    public ResponseEntity<List<Doctor>> searchDoctorsByDepartment(@RequestParam("department") String department) {
        List<Doctor> doctors = appointmentService.searchDoctorsByDepartment(department);
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }


//    @GetMapping("/doctor/{doctorName}")
//    public List<Appointments> getAppointmentsByDoctorName(@PathVariable("doctorName") String doctorName) {
//        return appointmentRepo.findByDoctorName(doctorName);
//    }

//    @GetMapping("/{doctorName}/{date}")
//    public List<Appointments> getAppointmentsByDoctorNameAndDate(
//            @PathVariable String doctorName,
//            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Timestamp date) {
//        return appointmentRepo.findByDoctorNameAndDate(doctorName, date);
//    }

    @GetMapping("/{doctorName}/{date}")
    public List<Appointments> getAppointmentsByDoctorNameAndDate(
            @PathVariable String doctorName,
            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") java.util.Date date) {
        Date sqlDate = new Date(date.getTime());
        return appointmentRepo.findByDoctorNameAndDate(doctorName, sqlDate);
    }

}