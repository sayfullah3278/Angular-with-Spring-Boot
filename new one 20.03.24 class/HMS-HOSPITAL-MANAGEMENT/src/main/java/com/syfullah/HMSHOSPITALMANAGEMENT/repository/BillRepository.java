package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BillRepository extends JpaRepository<Bill, Integer > {


//    @Query("select det from MeasurementDetails det where det.styleId.id=?1")
//    public List<MeasurementDetails> findByStyleId(int id);
    @Query("select b from Bill b where b.admissionId.admissionId = ?1")
Optional<Bill> findBillByAdmissionId(int id);
}
