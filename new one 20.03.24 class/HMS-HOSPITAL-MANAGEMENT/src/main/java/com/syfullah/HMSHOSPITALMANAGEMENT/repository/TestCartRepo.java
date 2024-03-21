package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestCartRepo extends JpaRepository<TestCart,Integer> {


}
