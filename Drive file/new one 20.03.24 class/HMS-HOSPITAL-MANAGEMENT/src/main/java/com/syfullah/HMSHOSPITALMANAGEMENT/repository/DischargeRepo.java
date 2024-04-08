package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Discharge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DischargeRepo extends JpaRepository<Discharge, Integer> {

    @Query("select dis from Discharge dis where dis.admission.admissionId =?1")
    Optional<Discharge> findById(int id);


}
