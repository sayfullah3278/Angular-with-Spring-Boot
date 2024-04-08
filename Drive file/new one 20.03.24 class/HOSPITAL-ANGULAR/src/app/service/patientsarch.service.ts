import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientSarch } from '../model/pasentsarch.model';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsarchService {
  private apiUrl = 'http://localhost:8088/api/patientsarch';

  constructor(private http: HttpClient) { }

  createPatientSarch(patientSarch: PatientSarch): Observable<PatientSarch> {
    return this.http.post<PatientSarch>(this.apiUrl, patientSarch);
  }

  getPatientSarchById(id: number): Observable<PatientSarch> {
    return this.http.get<PatientSarch>(`${this.apiUrl}/${id}`);
  }

  updatePatientSarch(id: number, patientSarch: PatientSarch): Observable<PatientSarch> {
    return this.http.put<PatientSarch>(`${this.apiUrl}/${id}`, patientSarch);
  }

  deletePatientSarch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllPatientSarches(): Observable<PatientSarch[]> {
    return this.http.get<PatientSarch[]>(this.apiUrl);
  }
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl+'api/doctors');
  }

  searchPatientsByDoctor(doctorId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/patientsarch=${doctorId}`);
  }


  getAppointmentsByDoctorNameAndDate(doctorName: string, date: string): Observable<PatientSarch[]> {
    return this.http.get<PatientSarch[]>(`http://localhost:8088/api/appointment/${doctorName}/${date}`);
  }

}
