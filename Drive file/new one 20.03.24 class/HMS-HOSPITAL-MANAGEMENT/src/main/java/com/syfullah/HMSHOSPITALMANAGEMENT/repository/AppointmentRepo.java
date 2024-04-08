package com.syfullah.HMSHOSPITALMANAGEMENT.repository;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointments, Integer> {
    List<Appointments> findByDepartment(String department);
    List<Appointments> findByDoctorNameIgnoreCase(String doctorName);

    @Query("select app from Appointments app where app.doctorsId.doctorId =?1")
    List<Appointments> findByDoc(int id);


    List<Appointments> findByDoctorNameAndDate(String doctorName, Date date);
}
