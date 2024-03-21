package com.syfullah.HMSHOSPITALMANAGEMENT.service;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Appointments;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.PatientSarch;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AppointmentRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.PatientSarchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PatientSarchService {

    private final AppointmentRepo appointmentRepo;
    private final PatientSarchRepo patientSarchRepo;

    @Autowired
    public PatientSarchService(PatientSarchRepo patientSarchRepo, AppointmentRepo appointmentRepo) {
        this.patientSarchRepo = patientSarchRepo;
        this.appointmentRepo =appointmentRepo;
    }

    // Create operation
    public PatientSarch createPatientSarch(PatientSarch patientSarch) {
        return patientSarchRepo.save(patientSarch);
    }

    // Read operation
    public PatientSarch getPatientSarchById(int id) {
        Optional<PatientSarch> patientSarchOptional = patientSarchRepo.findById(id);
        return patientSarchOptional.orElse(null);
    }

    // Update operation
    public PatientSarch updatePatientSarch(int id, PatientSarch updatedPatientSarch) {
        Optional<PatientSarch> patientSarchOptional = patientSarchRepo.findById(id);
        if (patientSarchOptional.isPresent()) {
            PatientSarch existingPatientSarch = patientSarchOptional.get();
//            existingPatientSarch.setDoctor_name(updatedPatientSarch.getDoctor_name());
            existingPatientSarch.setName(updatedPatientSarch.getName());
            existingPatientSarch.setAge(updatedPatientSarch.getAge());
            existingPatientSarch.setPhone(updatedPatientSarch.getPhone());
            existingPatientSarch.setDoctorsId(updatedPatientSarch.getDoctorsId());
            existingPatientSarch.setAppointments(updatedPatientSarch.getAppointments());
            return patientSarchRepo.save(existingPatientSarch);
        }
        return null;
    }

    // Delete operation
    public void deletePatientSarch(int id) {
        patientSarchRepo.deleteById(id);
    }

    // Get all patient searches
    public List<PatientSarch> getAllPatientSarches() {
        return patientSarchRepo.findAll();
    }


    public List<PatientSarch> findPatientsByDoctorName(String doctorName) {
        List<Appointments> appointmentList = appointmentRepo.findByDoctorNameIgnoreCase(doctorName);

        // Extract patient names from Appointment
        List<PatientSarch> patients = appointmentList.stream()
                .map(appointment -> appointment.getPatient(appointment.getAppointmentId())) // Using lambda expression
                .collect(Collectors.toList());

        return patients;
    }

        private List<Appointments> appointments;

        // Constructor or method to initialize appointments
        // For example:
        public PatientSarchService(AppointmentRepo appointmentRepo, PatientSarchRepo patientSarchRepo, List<Appointments> appointments) {
            this.appointmentRepo = appointmentRepo;
            this.patientSarchRepo = patientSarchRepo;
            this.appointments = appointments;
        }

    public PatientSarch getPatient(int doctorId, String doctorName) {
        for (Appointments appointment : appointments) {
            // Check if the appointment is associated with the specified doctor
            Doctor doctor = appointment.getDoctorsId();
            if (doctorId != 0 && doctor.getDoctorId() == doctorId) {
                // Retrieve patient information from the appointment and return it
                return appointment.getPatient(appointment.getAppointmentId());
            }
            if (doctorName != null && doctor.getDoctorName().equals(doctorName)) {
                // Retrieve patient information from the appointment and return it
                return appointment.getPatient(appointment.getAppointmentId());
            }
        }
        // Return null if no matching appointment is found
        return null;
    }


    public PatientSarch getPatient(int patientId) {
        // Sample logic to retrieve patient data
        return patientSarchRepo.findPatientById(patientId);
    }
}
