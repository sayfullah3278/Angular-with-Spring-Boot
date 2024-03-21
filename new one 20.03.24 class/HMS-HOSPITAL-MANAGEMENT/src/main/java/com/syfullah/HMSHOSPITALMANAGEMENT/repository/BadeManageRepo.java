package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.BadeManage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BadeManageRepo extends JpaRepository<BadeManage, Long> {
    BadeManage findByBedNumber(String bedNumber);
}
