package com.syfullah.HMSHOSPITALMANAGEMENT.controller;



import com.syfullah.HMSHOSPITALMANAGEMENT.entity.PatientSarch;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.PatientSarchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patientsarch")
@CrossOrigin("*")
public class PatientSarchController {
    private final PatientSarchService patientSarchService;

    @Autowired
    public PatientSarchController(PatientSarchService patientSarchService) {
        this.patientSarchService = patientSarchService;
    }

    @PostMapping("")
    public PatientSarch createPatientSarch(@RequestBody PatientSarch patientSarch) {
        return patientSarchService.createPatientSarch(patientSarch);
    }

    @GetMapping("/{id}")
    public PatientSarch getPatientSarchById(@PathVariable int id) {
        return patientSarchService.getPatientSarchById(id);
    }

    @PutMapping("/{id}")
    public PatientSarch updatePatientSarch(@PathVariable int id, @RequestBody PatientSarch updatedPatientSarch) {
        return patientSarchService.updatePatientSarch(id, updatedPatientSarch);
    }

    @DeleteMapping("/{id}")
    public void deletePatientSarch(@PathVariable int id) {
        patientSarchService.deletePatientSarch(id);
    }

    @GetMapping("")
    public List<PatientSarch> getAllPatientSarches() {
        return patientSarchService.getAllPatientSarches();
    }




}
