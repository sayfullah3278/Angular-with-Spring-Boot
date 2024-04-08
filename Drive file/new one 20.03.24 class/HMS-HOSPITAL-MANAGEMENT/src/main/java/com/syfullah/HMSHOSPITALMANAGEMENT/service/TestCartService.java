package com.syfullah.HMSHOSPITALMANAGEMENT.service;



import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestCart;

import com.syfullah.HMSHOSPITALMANAGEMENT.repository.TestCartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestCartService {

    private final TestCartRepo testCartRepo;

    @Autowired
    public TestCartService(TestCartRepo testCartRepo) {
        this.testCartRepo = testCartRepo;
    }

    // Create operation
    public TestCart createTestCart(TestCart testCart) {
        return testCartRepo.save(testCart);
    }

    // Read operation
    public TestCart getTestCartById(int product_id) {
        Optional<TestCart> testCartOptional = testCartRepo.findById(product_id);
        return testCartOptional.orElse(null);
    }

    // Update operation
    public TestCart updateTestCart(int product_id, TestCart updatedTestCart) {
        Optional<TestCart> testCartOptional = testCartRepo.findById(product_id);
        if (testCartOptional.isPresent()) {
            TestCart existingTestCart = testCartOptional.get();
            existingTestCart.setProductName(updatedTestCart.getProductName());
            existingTestCart.setDepartment(updatedTestCart.getDepartment());
            existingTestCart.setPrice(updatedTestCart.getPrice());

            return testCartRepo.save(existingTestCart);
        }
        return null;
    }

    // Delete operation
    public void deleteTestCart(int product_id) {
        testCartRepo.deleteById(product_id);
    }

    // Get all TestCart
    public List<TestCart> getAllTestCart() {
        return testCartRepo.findAll();
    }


}
