package com.syfullah.HMSHOSPITALMANAGEMENT.service;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestAndPasient;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestCart;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.TestAndPasientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.util.Optional;


@Service
public class TestAndPatientService {

    private final TestAndPasientRepo testAndPasientRepo;

    @Autowired
    public TestAndPatientService(TestAndPasientRepo testAndPasientRepo) {
        this.testAndPasientRepo = testAndPasientRepo;
    }

    // Create operation
    public TestAndPasient createTestAndPasient(TestAndPasient testAndPasient) {
        return testAndPasientRepo.save(testAndPasient);
    }

    // Read operation
    public TestAndPasient getTestAndPasientById(int id) {
        Optional<TestAndPasient> testAndPasientOptional = testAndPasientRepo.findById(id);
        return testAndPasientOptional.orElse(null);
    }

    // Update operation
    public TestAndPasient updateTestAndPasient(int id, TestAndPasient updatedtestAndPasient) {
        Optional<TestAndPasient> testAndPasientOptional = testAndPasientRepo.findById(id);
        if (testAndPasientOptional.isPresent()) {
            TestAndPasient existingtestAndPasient = testAndPasientOptional.get();
            existingtestAndPasient.setPasentName(updatedtestAndPasient.getPasentName());
            existingtestAndPasient.setRefferal(updatedtestAndPasient.getRefferal());
            existingtestAndPasient.setContact(updatedtestAndPasient.getContact());
            existingtestAndPasient.setTotalAmount(updatedtestAndPasient.getTotalAmount());
            existingtestAndPasient.setDueAmount(updatedtestAndPasient.getDueAmount());
            existingtestAndPasient.setPaidAmount(updatedtestAndPasient.getPaidAmount());
            existingtestAndPasient.setDelevery_time(updatedtestAndPasient.getDelevery_time());


            return testAndPasientRepo.save(existingtestAndPasient);
        }
        return null;
    }

    // Delete operation
    public void deleteTestAndPasient(int id) {
        testAndPasientRepo.deleteById(id);
    }

    // Get all TestAndPasient
    public ByteArrayInputStream getAllTestAndPasient() {
        return (ByteArrayInputStream) testAndPasientRepo.findAll();
    }


    public TestAndPasient mapTestCartToTestPasient(TestCart testCart) {
        TestAndPasient testAndPasient = new TestAndPasient();

        // Map TestCart fields to TestAndPasient fields
        testAndPasient.setPasentName(testCart.getProductName());
        // Map other fields as needed

        return testAndPasient;
    }
}
