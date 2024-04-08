package com.syfullah.HMSHOSPITALMANAGEMENT.controller;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Bill;
import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Discharge;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AdmissionRepo;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.BillRepository;
import com.syfullah.HMSHOSPITALMANAGEMENT.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin("*")
public class BillController {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private BillService billingService;
    @Autowired
    private AdmissionRepo admissionRepo;


//    @PostMapping("/generate")
//    public ResponseEntity<Bill> generateBillFromDischarge(@RequestBody Discharge discharge) {
//        // Generate bill from discharge information
//        Bill bill = billingService.generateBill(discharge);
//
//        // Return the generated bill with HTTP status 200 (OK)
//        return ResponseEntity.ok().body(bill);
//    }


    @PostMapping("/generate")
    public ResponseEntity<Bill> generateBillFromDischarge(@RequestBody Discharge discharge) {
        // Generate bill from discharge information
        Bill bill = billingService.generateBill(discharge);

        // Return the generated bill with HTTP status 200 (OK)
        return ResponseEntity.ok().body(bill);
    }

    // Create a new bill

    @PostMapping("")
    public Bill createBill(@RequestBody Bill bill) {
        String pname = bill.getPassent_name();
        Admission admission = admissionRepo.findByName(pname);
        bill.setAdmissionId(admission);


        return billRepository.save(bill);
    }


    @PostMapping("/save/{id}")
    public Bill createBill(@RequestBody Bill bill, @PathVariable(value = "id") Integer adId) {

        boolean exist = admissionRepo.existsById(adId);
        if (exist) {
            Admission admission = admissionRepo.findById(adId).get();
            bill.setAdmissionId(admission);

        }
        return billRepository.save(bill);
    }

    // Retrieve all bills
    @GetMapping("")
    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    // Retrieve a single bill by id

    @GetMapping("/{id}")
    public ResponseEntity<Bill> getBillById(@PathVariable(value = "id") Integer billId) {
        Optional<Bill> bill = billRepository.findById(billId);
        return bill.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/ad/{adid}")
    public ResponseEntity<Bill> getBillByadId(@PathVariable(value = "adid") Integer billadId) {
        Optional<Bill> bill = billRepository.findBillByAdmissionId(billadId);
        return bill.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update a bill
    @PutMapping("/{id}")
    public ResponseEntity<Bill> updateBill(@PathVariable(value = "id") Integer billId, @RequestBody Bill billDetails) {
        Optional<Bill> bill = billRepository.findById(billId);

        if (bill.isPresent()) {
            Bill updatedBill = bill.get();
            updatedBill.setPassent_name(billDetails.getPassent_name());
            updatedBill.setAge(billDetails.getAge());
            updatedBill.setAdmition_date(billDetails.getAdmition_date());
            updatedBill.setDischarg_date(billDetails.getDischarg_date());
            updatedBill.setAdmitedDays(billDetails.getAdmitedDays());
            updatedBill.setDaily_cost(billDetails.getDaily_cost());
            updatedBill.setTotal_amount(billDetails.getTotal_amount());
            updatedBill.setPaid_amount(billDetails.getPaid_amount());
            updatedBill.setDue_amount(billDetails.getDue_amount());
            updatedBill.setPaymentMethod(billDetails.getPaymentMethod());
            billRepository.save(updatedBill);
            return ResponseEntity.ok(updatedBill);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a bill
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBill(@PathVariable(value = "id") Integer billId) {
        return billRepository.findById(billId)
                .map(bill -> {
                    billRepository.delete(bill);
                    return ResponseEntity.ok().build();
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
