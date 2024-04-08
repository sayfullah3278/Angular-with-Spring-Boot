import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestAndPatient } from '../model/test-patient.model';
import { TestCart } from '../model/testCard.model';


@Injectable({
  providedIn: 'root'
})
export class TestAndPatientService {

  private baseUrl = 'http://localhost:8080/api/testandpatient';

  constructor(private http: HttpClient) { }

  createTestAndPatient(testAndPatient: TestAndPatient): Observable<TestAndPatient> {
    return this.http.post<TestAndPatient>(`${this.baseUrl}`, testAndPatient);
  }

  getTestAndPatientById(id: number): Observable<TestAndPatient> {
    return this.http.get<TestAndPatient>(`${this.baseUrl}/${id}`);
  }

  updateTestAndPatient(id: number, updatedTestAndPatient: TestAndPatient): Observable<TestAndPatient> {
    return this.http.put<TestAndPatient>(`${this.baseUrl}/${id}`, updatedTestAndPatient);
  }

  deleteTestAndPatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllTestAndPatient(): Observable<TestAndPatient[]> {
    return this.http.get<TestAndPatient[]>(`${this.baseUrl}`);
  }
  // searchTest(testCard: TestCart): Observable<TestCart> {
  //   return this.http.post<TestCart[]>(`${this.baseUrl}/${search}`, {});
  // }
  searchTest(testCard: TestCart): Observable<TestCart> {
    return this.http.post<TestCart>(`${this.baseUrl}/${this.searchTest}`, {});
  }
  generateStockReport(){
    return this.http.get<TestCart>(`${this.baseUrl}/${this.generateStockReport}`, {});
  }

  updateTestCartPrice(TestPrice:{stockId})
}
