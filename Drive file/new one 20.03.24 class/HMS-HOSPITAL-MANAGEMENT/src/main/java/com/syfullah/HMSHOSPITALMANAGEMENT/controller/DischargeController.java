package com.syfullah.HMSHOSPITALMANAGEMENT.controller;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Discharge;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AdmissionRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.DischargeRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.DischargeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/discharge")
@CrossOrigin("*")
@RequiredArgsConstructor
public class DischargeController {

    private final DischargeService dischargeService;
    private final DischargeRepo dischargeRepo;
    private final AdmissionRepo admissionRepo;



    public Discharge admissionToDischarge(@RequestBody Admission admission){
        return dischargeService.mapAdmissionToDischarge(admission);
    }
    // Create a new discharge record
    @PostMapping("")
    public ResponseEntity<Discharge> createDischarge(@RequestBody Discharge discharge) {
        Discharge newDischarge = dischargeService.createDischarge(discharge);
        return new ResponseEntity<>(newDischarge, HttpStatus.CREATED);
    }

    // Read all discharge records
    @GetMapping("")
    public ResponseEntity<List<Discharge>> getAllDischarges() {
        List<Discharge> discharges = dischargeService.getAllDischarge();
        return new ResponseEntity<>(discharges, HttpStatus.OK);
    }

    // Read a single discharge record
    @GetMapping("/{id}")
    public ResponseEntity<Discharge> getDischargeById(@PathVariable int id) {
        Discharge discharge = dischargeService.getDischargeById(id);
        return discharge != null ? new ResponseEntity<>(discharge, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Update a discharge record
    @PutMapping("/{id}")
    public ResponseEntity<Discharge> updateDischarge(@PathVariable int id, @RequestBody Discharge discharge) {
        Discharge updatedDischarge = dischargeService.updateDischarge(id, discharge);
        return updatedDischarge != null ? new ResponseEntity<>(updatedDischarge, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete a discharge record
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDischarge(@PathVariable int id) {
        dischargeService.deleteDischarge(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PostMapping("/admission/{admissionId}")
    public ResponseEntity<String> dischargePatient(@PathVariable int admissionId) {
        Optional<Admission> optionalAdmission = admissionRepo.findById(admissionId);
        if (optionalAdmission.isPresent()) {
            Admission admission = optionalAdmission.get();
            // Create a new Discharge object
            Discharge discharge = new Discharge();
            discharge.setName(admission.getName());
            discharge.setAge(admission.getAge());
            discharge.setAdmissiondate(admission.getAdmissionDate());

            // Convert java.util.Date to java.sql.Date
            java.sql.Date dischargeDate = new java.sql.Date(new Date().getTime());
            discharge.setDischargeDate(dischargeDate);

            // Calculate admitted days
            long admissionTime = admission.getAdmissionDate().getTime();
            long dischargeTime = dischargeDate.getTime();
            int admittedDays = (int) ((dischargeTime - admissionTime) / (1000 * 60 * 60 * 24));
            discharge.setAdmitade_dayse(admittedDays);
            discharge.setDischargeSummary("Discharged successfully.");
            discharge.setAdmission(admission); // Associate discharge with admission

            // Save the discharge record
            dischargeRepo.save(discharge);
            return new ResponseEntity<>("Patient discharged successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Admission not found.", HttpStatus.NOT_FOUND);
        }
    }



}
