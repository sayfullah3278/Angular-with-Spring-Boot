import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctor } from '../model/doctor.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:8088/api/doctors'; // API URL

  constructor(private http: HttpClient) { }

  // private handleError(error: any): Observable<never> {
  //   console.error('An error occurred', error);
  //   return throwError(error);
  // }

  // getDoctors(): Observable<Doctor[]> {
  //   return this.http.get<Doctor[]>(this.apiUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // getDoctor(id: number): Observable<Doctor> {
  //   return this.http.get<Doctor>(`${this.apiUrl}/${id}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // addDoctor(doctor: Doctor): Observable<Doctor> {
  //   return this.http.post<Doctor>(this.apiUrl, doctor, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // updateDoctor(doctor: Doctor): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${doctor.doctor_id}`, doctor, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // deleteDoctor(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  searchDoctorsByDepartment(department: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/${department}`);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${doctor.doctor_id}`, doctor);
  }

  deleteDoctor(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
