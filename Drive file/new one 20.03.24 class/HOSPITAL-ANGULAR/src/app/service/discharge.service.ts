import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discharge } from '../model/discharge.model';
import { Observable, catchError, throwError } from 'rxjs';
import { Admission } from '../model/admission.model';

@Injectable({
  providedIn: 'root'
})
export class DischargeService {
  private apiUrl = 'http://localhost:8088/api/discharge';

  constructor(private http: HttpClient) { }

  createDischarge(discharge: Discharge): Observable<Discharge> {
    return this.http.post<Discharge>(this.apiUrl, discharge);
  }

  getAllDischarges(): Observable<Discharge[]> {
    return this.http.get<Discharge[]>(this.apiUrl);
  }

  getDischargeById(id: number): Observable<Discharge> {
    return this.http.get<Discharge>(`${this.apiUrl}/${id}`);
  }

  updateDischarge(id: number, discharge: Discharge): Observable<Discharge> {
    return this.http.put<Discharge>(`${this.apiUrl}/${id}`, discharge);
  }

  deleteDischarge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAdmissionToDischarge(): Observable<Admission[]> {
    return this.http.get<Admission[]>(this.apiUrl+'/admissions');
      // id: admission.id,
      // patientName: admission.patientName,
      // diagnosis: admission.diagnosis,
      // Map other fields if needed
    }

    dischargePatient(admissionId: string): Observable<string> {
      const url = `http://localhost:8088/api/discharge/admission/${admissionId}`;
      return this.http.post<string>(url, {}).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error occurred:', error);
          return throwError(error); // Rethrow the error
        })
      );
    }




  }
  

