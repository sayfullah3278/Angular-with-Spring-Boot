package com.syfullah.HMSHOSPITALMANAGEMENT.controller;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.BadeManage;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.BadeManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/beds")
@CrossOrigin("*")

public class BademanageController {

    private final BadeManagementService badeManageService;

    @Autowired
    public BademanageController(BadeManagementService badeManageService) {
        this.badeManageService = badeManageService;
    }

    @GetMapping("/bedNumber/{bedNumber}")
    public ResponseEntity<BadeManage> getBedByBedNumber(@PathVariable String bedNumber) {
        BadeManage bed = badeManageService.getBedByBedNumber(bedNumber);
        if (bed != null) {
            return new ResponseEntity<>(bed, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("")
    public ResponseEntity<List<BadeManage>> getAllBeds() {
        List<BadeManage> beds = badeManageService.getAllBeds();
        return new ResponseEntity<>(beds, HttpStatus.OK);
    }

    @GetMapping("/{bedId}")
    public ResponseEntity<BadeManage> getBedById(@PathVariable Long bedId) {
        Optional<BadeManage> bed = badeManageService.getBedById(bedId);
        return bed.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public ResponseEntity<BadeManage> createBed(@RequestBody BadeManage bed) {
        BadeManage createdBed = badeManageService.saveOrUpdateBed(bed);
        return new ResponseEntity<>(createdBed, HttpStatus.CREATED);
    }

    @PutMapping("/{bedId}")
    public ResponseEntity<BadeManage> updateBed(@PathVariable Long bedId, @RequestBody BadeManage bed) {
        Optional<BadeManage> existingBedOptional = badeManageService.getBedById(bedId);
        if (existingBedOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bed.setBedId(bedId);
        BadeManage updatedBed = badeManageService.saveOrUpdateBed(bed);
        return new ResponseEntity<>(updatedBed, HttpStatus.OK);
    }

    @DeleteMapping("/{bedId}")
    public ResponseEntity<Void> deleteBed(@PathVariable Long bedId) {
        Optional<BadeManage> bedOptional = badeManageService.getBedById(bedId);
        if (bedOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        badeManageService.deleteBed(bedId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
