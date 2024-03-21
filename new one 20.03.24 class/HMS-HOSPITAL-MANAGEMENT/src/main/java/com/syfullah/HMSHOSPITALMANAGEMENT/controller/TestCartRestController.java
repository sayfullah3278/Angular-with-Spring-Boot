package com.syfullah.HMSHOSPITALMANAGEMENT.controller;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.TestCart;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.TestCartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testcard")
@CrossOrigin("*")
public class TestCartRestController {
    @Autowired
    private TestCartRepo testCartRepo;

    // Get all test carts
    @GetMapping
    public List<TestCart> getAllTestCarts() {
        return testCartRepo.findAll();
    }

    // Get a test cart by ID
    @GetMapping("/{id}")
    public TestCart getTestCartById(@PathVariable int id) {
        return testCartRepo.findById(id).orElse(null);
    }

    // Create a new test cart
    @PostMapping
    public TestCart createTestCart(@RequestBody TestCart testCart) {
        return testCartRepo.save(testCart);
    }

    // Update an existing test cart
    @PutMapping("/{id}")
    public TestCart updateTestCart(@PathVariable int id, @RequestBody TestCart testCart) {
        testCart.setProductId(id);
        return testCartRepo.save(testCart);
    }

    // Delete a test cart
    @DeleteMapping("/{id}")
    public void deleteTestCart(@PathVariable int id) {
        testCartRepo.deleteById(id);
    }
}
