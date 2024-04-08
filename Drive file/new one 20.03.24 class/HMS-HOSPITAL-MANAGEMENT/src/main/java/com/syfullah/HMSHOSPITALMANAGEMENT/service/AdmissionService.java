package com.syfullah.HMSHOSPITALMANAGEMENT.service;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Admission;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.AdmissionRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdmissionService {

    private final AdmissionRepo admissionRepo;

    public AdmissionService(AdmissionRepo admissionRepo){
        this.admissionRepo=admissionRepo;
    }

    public Admission createAdmission(Admission admission){

        return admissionRepo.save(admission);
    }

    public Admission getAdmissionBtId(int admission_id){
        Optional<Admission> admissionOptional=admissionRepo.findById(admission_id);
        return admissionOptional.orElse(null);
    }

    public Admission updateAdmission(int admission_id, Admission updateAdmission){
        Optional<Admission> admissionOptional= admissionRepo.findById(admission_id);
        if(admissionOptional.isPresent()){

            Admission existingAdmission=admissionOptional.get();
            existingAdmission.setName(updateAdmission.getName());
            existingAdmission.setEmail(updateAdmission.getEmail());
            existingAdmission.setPhone(updateAdmission.getPhone());
            existingAdmission.setAge(updateAdmission.getAge());
            existingAdmission.setSex(updateAdmission.getSex());
            existingAdmission.setBloodGroup(updateAdmission.getBloodGroup());
            existingAdmission.setDepartment(updateAdmission.getDepartment());
            existingAdmission.setDoctor(updateAdmission.getDoctor());
            existingAdmission.setDiseaseDescription(updateAdmission.getDiseaseDescription());
            existingAdmission.setAdmissionDate(updateAdmission.getAdmissionDate());
            existingAdmission.setEmergencyContactNumber(updateAdmission.getEmergencyContactNumber());
            existingAdmission.setRelationshipWithPatient(updateAdmission.getRelationshipWithPatient());
            return admissionRepo.save(existingAdmission);
        }
        return null;
    }

    public void deleteAdmission(int admission_id){

        admissionRepo.deleteById(admission_id);
    }

    public List<Admission> getAdmission(){
        return admissionRepo.findAll();
    }
}
