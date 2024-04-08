package com.syfullah.HMSHOSPITALMANAGEMENT.controller;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.BadeManage;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AdmissionRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.BadeManageRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.DoctorRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admissions")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AdmissionController {

    private final AdmissionRepo admissionRepo;
    private final DoctorRepo doctorRepo;
    private final BadeManageRepo badeManageRepo;




//    public AdmissionController(AdmissionRepo admissionRepo, DoctorRepo doctorRepo) {
//        this.admissionRepo = admissionRepo;
//        this.doctorRepo= doctorRepo;
//    }



    @GetMapping("/{id}/doctorName")
    public ResponseEntity<String> getDoctorNameForAdmission(@PathVariable int id) {
        Optional<Admission> admissionOptional = admissionRepo.findById(id);
        if (admissionOptional.isPresent()) {
            Admission admission = admissionOptional.get();
            Doctor doctor = admission.getDoctorsId();
            if (doctor != null) {
                String doctorName = doctor.getDoctorName();
                return ResponseEntity.ok(doctorName);
            } else {
                return ResponseEntity.notFound().build(); // Doctor not found for this admission
            }
        } else {
            return ResponseEntity.notFound().build(); // Admission not found
        }
    }

    @GetMapping
    public List<Admission> getAllAdmissions() {
        return admissionRepo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Admission> getAdmissionById(@PathVariable int id) {
        return admissionRepo.findById(id);
    }

    @PostMapping
    public Admission addAdmission(@RequestBody Admission admission) {
        // doctor id save
        String docName = admission.getDoctor();
        Doctor doctor = doctorRepo.findBydoctorName(docName);
        admission.setDoctorsId(doctor);
        // bed id save
        String bedName = admission.getBadeManage().getBedNumber();
       BadeManage bed = badeManageRepo.findByBedNumber(bedName);
        admission.setBadeManage(bed);

        return admissionRepo.save(admission);
    }

    @PutMapping("/{id}")
    public Admission updateAdmission(@PathVariable int id, @RequestBody Admission updatedAdmission) {
        updatedAdmission.setAdmissionId(id); // Ensure ID consistency
        return admissionRepo.save(updatedAdmission);
    }

    @DeleteMapping("/{id}")
    public void deleteAdmission(@PathVariable int id) {
        admissionRepo.deleteById(id);
    }
}
