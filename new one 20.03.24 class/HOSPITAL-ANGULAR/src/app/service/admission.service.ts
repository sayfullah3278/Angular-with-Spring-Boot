import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admission } from '../model/admission.model';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private baseUrl = 'http://localhost:8088/admissions'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getAllAdmissions(): Observable<Admission[]> {
    return this.http.get<Admission[]>(this.baseUrl);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl+'api/doctors');
  }
  getAdmissionById(id: number): Observable<Admission> {
    return this.http.get<Admission>(`${this.baseUrl}/${id}`);
  }

  addAdmission(admission: Admission): Observable<Admission> {
    return this.http.post<Admission>(this.baseUrl, admission);
  }

  updateAdmission(id: number, updatedAdmission: Admission): Observable<Admission> {
    return this.http.put<Admission>(`${this.baseUrl}/${id}`, updatedAdmission);
  }

  deleteAdmission(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
