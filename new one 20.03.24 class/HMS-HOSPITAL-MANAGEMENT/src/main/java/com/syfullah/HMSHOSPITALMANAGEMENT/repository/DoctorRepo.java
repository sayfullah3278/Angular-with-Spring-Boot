package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {
    List<Doctor> findByDepartment(String department);
    //Optional<DoctorList> findByDoctor_id(Integer id);

//    Optional<Doctor> findByDoctor(String name);
    Doctor findBydoctorName(String name);
}
