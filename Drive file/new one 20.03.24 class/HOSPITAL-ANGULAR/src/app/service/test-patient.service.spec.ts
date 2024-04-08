import { TestBed } from '@angular/core/testing';

import { TestPatientService } from './test-patient.service';

describe('TestPatientService', () => {
  let service: TestPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
