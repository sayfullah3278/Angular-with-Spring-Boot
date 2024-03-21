package com.syfullah.HMSHOSPITALMANAGEMENT.service;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Bill;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Discharge;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    private final BillRepository billRepository;

    @Autowired
    public BillService(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    // Create operation
    public Bill createBill(Bill bill) {
        return billRepository.save(bill);
    }



    // Method to generate bill for a discharged patient
    public Bill generateBill(Discharge discharge) {
        // Retrieve discharge information
        String patientName = discharge.getName();
        int age = discharge.getAge();
        Date admissionDate = discharge.getAdmissiondate();
        Date dischargeDate = discharge.getDischargeDate();
        int admittedDays = discharge.getAdmitade_dayse();

        // Calculate total amount based on admitted days and any other factors
        // Implement this method according to your business logic

        // Create a new Bill object
        Bill bill = new Bill();
        bill.setPassent_name(patientName);
        bill.setAge(String.valueOf(age));
        bill.setAdmition_date(String.valueOf(admissionDate));
        bill.setDischarg_date(String.valueOf(dischargeDate));
        bill.setAdmitedDays(admittedDays);


        double totalAmount =admittedDays*bill.getDaily_cost();

        bill.setTotal_amount(totalAmount);

        // Save the bill to the database
        return billRepository.save(bill);
    }

    // Implement this method according to your business logic to calculate total amount

    // Read operation
    public Bill getBillById(int bill_id) {
        Optional<Bill> billOptional = billRepository.findById(bill_id);
        return billOptional.orElse(null);
    }

    // Update operation
    public Bill updateBill(int bill_id, Bill updatedBill) {
        Optional<Bill> billOptional = billRepository.findById(bill_id);
        if (billOptional.isPresent()) {
            Bill existingBill = billOptional.get();
            existingBill.setPassent_name(updatedBill.getPassent_name());
            existingBill.setAge(updatedBill.getAge());
            existingBill.setAdmition_date(updatedBill.getAdmition_date());
            existingBill.setDischarg_date(updatedBill.getDischarg_date());
            existingBill.setAdmitedDays(updatedBill.getAdmitedDays());
            existingBill.setDaily_cost(updatedBill.getDaily_cost());
            existingBill.setTotal_amount(updatedBill.getTotal_amount());
            existingBill.setPaid_amount(updatedBill.getPaid_amount());
            existingBill.setDue_amount(updatedBill.getDue_amount());
            existingBill.setPaymentMethod(updatedBill.getPaymentMethod());
            return billRepository.save(existingBill);
        }
        return null;
    }

    // Delete operation
    public void deleteBill(int bill_id) {
        billRepository.deleteById(bill_id);
    }

    // Get all appointments
    public List<Bill> getAllBill() {
        return billRepository.findAll();
    }

}
