package com.syfullah.HMSHOSPITALMANAGEMENT.service;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.BadeManage;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.BadeManageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BadeManagementService {

    private final BadeManageRepo badeManageRepo;

    @Autowired
    public BadeManagementService(BadeManageRepo badeManageRepo) {
        this.badeManageRepo = badeManageRepo;
    }

    public BadeManage getBedByBedNumber(String bedNumber) {
        return badeManageRepo.findByBedNumber(bedNumber);
    }
    public List<BadeManage> getAllBeds() {
        return badeManageRepo.findAll();
    }

    public Optional<BadeManage> getBedById(Long bedId) {
        return badeManageRepo.findById(bedId);
    }

    public BadeManage saveOrUpdateBed(BadeManage bed) {
        return badeManageRepo.save(bed);
    }

    public void deleteBed(Long bedId) {
        badeManageRepo.deleteById(bedId);
    }
}
