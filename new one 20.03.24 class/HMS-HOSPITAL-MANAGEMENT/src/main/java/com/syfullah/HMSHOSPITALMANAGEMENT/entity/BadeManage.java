package com.syfullah.HMSHOSPITALMANAGEMENT.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BadeManage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bedId;

    private String bedNumber;

    private Double bedCharge;

    private String bedCatagori;

    public BadeManage(String bedNumber) {
        this.bedNumber = bedNumber;
    }
}
