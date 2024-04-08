package com.syfullah.HMSHOSPITALMANAGEMENT.service;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Appointments;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepo appointmentRepo;

    private final DoctorService doctorService;

    @Autowired
    public AppointmentService(AppointmentRepo appointmentRepo, DoctorService doctorService) {
        this.appointmentRepo = appointmentRepo;
        this.doctorService = doctorService;
    }

    // Create operation
    public Appointments createAppointment(Appointments appointment) {
        return appointmentRepo.save(appointment);
    }

    // Read operation
    public Appointments getAppointmentById(int appointmentId) {
        Optional<Appointments> appointmentOptional = appointmentRepo.findById(appointmentId);
        return appointmentOptional.orElse(null);
    }

    // Update operation
    public Appointments updateAppointment(int appointmentId, Appointments updatedAppointment) {
        Optional<Appointments> appointmentOptional = appointmentRepo.findById(appointmentId);
        if (appointmentOptional.isPresent()) {
            Appointments existingAppointment = appointmentOptional.get();
            existingAppointment.setName(updatedAppointment.getName());
            existingAppointment.setEmail(updatedAppointment.getEmail());
            existingAppointment.setPhone(updatedAppointment.getPhone());
            existingAppointment.setDate(updatedAppointment.getDate());
            existingAppointment.setDepartment(updatedAppointment.getDepartment());
            existingAppointment.setDoctorName(updatedAppointment.getDoctorName());
            existingAppointment.setDisease(updatedAppointment.getDisease());
            existingAppointment.setDoctorsId(updatedAppointment.getDoctorsId());
            return appointmentRepo.save(existingAppointment);
        }
        return null;
    }

    // Delete operation
    public void deleteAppointment(int appointmentId) {
        appointmentRepo.deleteById(appointmentId);
    }

    // Get all appointments
    public List<Appointments> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    // Method to search for doctors by department in appointments
    public List<Doctor> searchDoctorsByDepartment(String department) {
        List<Appointments> appointments = appointmentRepo.findByDepartment(department);
        List<Doctor> doctors = new ArrayList<>();

        for (Appointments appointment : appointments) {
            Doctor doctor = doctorService.getDoctorById(appointment.getDoctorsId().getDoctorId());
            if (doctor != null) {
                doctors.add(doctor);
            }
        }

        return doctors;
    }

}
