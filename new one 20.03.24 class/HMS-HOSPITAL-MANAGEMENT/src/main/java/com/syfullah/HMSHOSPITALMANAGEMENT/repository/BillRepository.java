package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Integer > {
}
