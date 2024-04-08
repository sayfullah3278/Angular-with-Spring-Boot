import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasentsarchComponent } from './pasentsarch.component';

describe('PasentsarchComponent', () => {
  let component: PasentsarchComponent;
  let fixture: ComponentFixture<PasentsarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasentsarchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasentsarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
