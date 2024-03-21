package com.syfullah.HMSHOSPITALMANAGEMENT.controller;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Appointments;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestAndPasient;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.TestAndPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testandpatient")
@CrossOrigin("*")
public class TestAntPatientController {

    private final TestAndPatientService testAndPatientService;

    @Autowired
    public TestAntPatientController (TestAndPatientService testAndPatientService){
        this.testAndPatientService=testAndPatientService;
    }

    @PostMapping("")
    public TestAndPasient createTestAndPasient(@RequestBody TestAndPasient testAndPasient) {
        return testAndPatientService.createTestAndPasient(testAndPasient);
    }

    @GetMapping("/{appointmentId}")
    public TestAndPasient getTestAndPasientById(@PathVariable int Id) {
        return testAndPatientService.getTestAndPasientById(Id);
    }

    @PutMapping("/{appointmentId}")
    public TestAndPasient updateTestAndPasient(@PathVariable int Id, @RequestBody TestAndPasient updatedTestAndPasient) {
        return testAndPatientService.updateTestAndPasient(Id, updatedTestAndPasient);
    }

    @DeleteMapping("/{appointmentId}")
    public void deleteTestAndPasient(@PathVariable int appointmentId) {
        testAndPatientService.deleteTestAndPasient(appointmentId);
    }

    @GetMapping("")
    public List<TestAndPasient> getAllTestAndPasient() {
        return testAndPatientService.getAllTestAndPasient();
    }
}