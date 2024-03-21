package com.syfullah.HMSHOSPITALMANAGEMENT.repository;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.PatientSarch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientSarchRepo extends JpaRepository<PatientSarch, Integer> {
    List<PatientSarch> findAll();
    PatientSarch findPatientById(int id);
}
