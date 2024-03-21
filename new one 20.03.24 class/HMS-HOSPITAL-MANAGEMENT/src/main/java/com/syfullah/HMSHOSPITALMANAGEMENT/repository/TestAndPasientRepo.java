package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestAndPasient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestAndPasientRepo extends JpaRepository<TestAndPasient, Integer> {
}
