package com.syfullah.HMSHOSPITALMANAGEMENT.service;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Discharge;

import com.syfullah.HMSHOSPITALMANAGEMENT.repository.DischargeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DischargeService {


    private final DischargeRepo dischargeRepo;

    @Autowired
    public DischargeService(DischargeRepo dischargeRepo) {
        this.dischargeRepo = dischargeRepo;
    }

    // Create operation
    public Discharge createDischarge(Discharge discharge) {
        return dischargeRepo.save(discharge);
    }

    // Read operation
    public Discharge getDischargeById(int dischargeId) {
        Optional<Discharge> DischargeOptional = dischargeRepo.findById(dischargeId);
        return DischargeOptional.orElse(null);
    }

    // Update operation
    public Discharge updateDischarge(int dischargeId, Discharge updatedDischarge) {
        Optional<Discharge> DischargeOptional = dischargeRepo.findById(dischargeId);
        if (DischargeOptional.isPresent()) {
            Discharge existingDischarge = DischargeOptional.get();
            existingDischarge.setName(updatedDischarge.getName());
            existingDischarge.setAge(updatedDischarge.getAge());
            existingDischarge.setAdmissiondate(updatedDischarge.getAdmissiondate());
            existingDischarge.setDischargeDate(updatedDischarge.getDischargeDate());
            existingDischarge.setAdmitade_dayse(updatedDischarge.getAdmitade_dayse());
            existingDischarge.setDischargeSummary(updatedDischarge.getDischargeSummary());

            return dischargeRepo.save(existingDischarge);
        }
        return null;
    }

    // Delete operation
    public void deleteDischarge(int dischargeId) {
        dischargeRepo.deleteById(dischargeId);
    }

    // Get all Discharge
    public List<Discharge> getAllDischarge() {
        return dischargeRepo.findAll();
    }

    public Discharge mapAdmissionToDischarge(Admission admission){
        Discharge discharge=new Discharge();
        discharge.setDischargeId(admission.getAdmissionId());
        discharge.setName(admission.getName());
        discharge.setAdmissiondate(admission.getAdmissionDate());
        discharge.setAge(admission.getAge());

        return discharge;
    }
}
