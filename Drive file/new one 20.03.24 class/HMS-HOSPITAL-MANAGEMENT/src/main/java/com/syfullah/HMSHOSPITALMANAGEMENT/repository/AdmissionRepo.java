package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.BadeManage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdmissionRepo extends JpaRepository<Admission, Integer> {

    // List<PasientAdmissionList> findByDoctorName(String name);
//    List<BadeManage>findbyId(long bedId);
    Admission findByName(String name);
}

