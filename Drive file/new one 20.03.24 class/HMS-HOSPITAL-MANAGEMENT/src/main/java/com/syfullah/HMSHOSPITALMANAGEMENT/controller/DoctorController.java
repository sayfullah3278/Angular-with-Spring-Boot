package com.syfullah.HMSHOSPITALMANAGEMENT.controller;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.DoctorRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/doctors")
@CrossOrigin("*")
public class DoctorController {

    private final DoctorRepo doctorRepo;
    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorRepo doctorRepo, DoctorService doctorService) {
        this.doctorRepo = doctorRepo;
        this.doctorService = doctorService;
    }

    // Endpoint to get doctors by department
    @GetMapping("/department/{department}")
    public List<Doctor> getDoctorsByDepartment(@PathVariable String department) {
        return doctorService.findDoctorsByDepartment(department);
    }


    @GetMapping("")
    public List<Doctor> getAllDoctors() {
        return doctorRepo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Doctor> getDoctorById(@PathVariable int id) {
        return doctorRepo.findById(id);
    }

    @PostMapping("")
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return doctorRepo.save(doctor);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable int id, @RequestBody Doctor updatedDoctor) {
        updatedDoctor.setDoctorId(id); // Ensure ID consistency
        return doctorRepo.save(updatedDoctor);
    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable int id) {
        doctorRepo.deleteById(id);
    }
}
