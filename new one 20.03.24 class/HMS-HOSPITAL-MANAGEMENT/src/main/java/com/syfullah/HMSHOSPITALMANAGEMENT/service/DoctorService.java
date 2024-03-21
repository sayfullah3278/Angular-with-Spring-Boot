package com.syfullah.HMSHOSPITALMANAGEMENT.service;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    private final DoctorRepo doctorRepo;

    @Autowired
    public DoctorService(DoctorRepo doctorRepo) {
        this.doctorRepo = doctorRepo;
    }

    // Create operation
    public Doctor createDoctor(Doctor doctor) {
        return doctorRepo.save(doctor);
    }

    // Read operation
    public Doctor getDoctorById(int doctorId) {
        Optional<Doctor> doctorOptional = doctorRepo.findById(doctorId);
        return doctorOptional.orElse(null);
    }

    // Update operation
    public Doctor updateDoctor(int doctorId, Doctor updatedDoctor) {
        Optional<Doctor> doctorOptional = doctorRepo.findById(doctorId);
        if (doctorOptional.isPresent()) {
            Doctor existingDoctor = doctorOptional.get();
            existingDoctor.setDoctorName(updatedDoctor.getDoctorName());
            existingDoctor.setPhone(updatedDoctor.getPhone());
            existingDoctor.setDepartment(updatedDoctor.getDepartment());
            existingDoctor.setSpecilization(updatedDoctor.getSpecilization());
            existingDoctor.setQualification(updatedDoctor.getQualification());
            existingDoctor.setExperience(updatedDoctor.getExperience());
            existingDoctor.setJoiningDate(updatedDoctor.getJoiningDate());
            existingDoctor.setDoctorFee(updatedDoctor.getDoctorFee());
            return doctorRepo.save(existingDoctor);
        }
        return null;
    }

    // Delete operation
    public void deleteDoctor(int doctorId) {
        doctorRepo.deleteById(doctorId);
    }

    // Get all Doctor
    public List<Doctor> getAllDoctor() {
        return doctorRepo.findAll();
    }

    public List<Doctor> findDoctorsByDepartment(String department) {
        return doctorRepo.findByDepartment(department);
    }
}
