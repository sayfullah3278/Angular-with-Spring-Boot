import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestAndPatientComponent } from './test-patient.component';



describe('TestPatientComponent', () => {
  let component: TestAndPatientComponent;
  let fixture: ComponentFixture<TestAndPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAndPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAndPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
