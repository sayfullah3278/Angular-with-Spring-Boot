package com.syfullah.HMSHOSPITALMANAGEMENT.controller;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Appointments;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestAndPasient;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestCart;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.TestAndPatientService;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.TestCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.util.List;

@RestController
@RequestMapping("api/testandpatient")
@CrossOrigin("*")
public class TestAntPatientController {

    private final TestAndPatientService testAndPatientService;
    private final TestCartService testCartService;


    @Autowired
    public TestAntPatientController (TestAndPatientService testAndPatientService ,TestCartService testCartService){
        this.testAndPatientService=testAndPatientService;
        this.testCartService=testCartService;
    }

    @PostMapping("")
    public TestAndPasient createTestAndPasient(@RequestBody TestAndPasient testAndPasient) {
        return testAndPatientService.createTestAndPasient(testAndPasient);
    }

    @PostMapping("/search")
    public TestAndPasient mapTestCartToTestPasient(@RequestBody TestCart testCart) {
        // Assuming you have a service method to handle the mapping
        return testAndPatientService.mapTestCartToTestPasient(testCart);
    }

    @GetMapping("/mj")
    public ResponseEntity<InputStreamResource> getTestStok(){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Disposition", "Inline; filename=grn-report.pdf");
        ByteArrayInputStream in = testAndPatientService.getAllTestAndPasient();
        return ResponseEntity.ok().headers(httpHeaders).contentType(MediaType.APPLICATION_PDF).body(new InputStreamResource(in));
    }
    @GetMapping("/aaa")
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
        return (List<TestAndPasient>) testAndPatientService.getAllTestAndPasient();
    }
}