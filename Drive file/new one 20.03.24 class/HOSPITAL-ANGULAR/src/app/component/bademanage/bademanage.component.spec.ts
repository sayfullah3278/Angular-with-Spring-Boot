import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BademanageComponent } from './bademanage.component';

describe('BademanageComponent', () => {
  let component: BademanageComponent;
  let fixture: ComponentFixture<BademanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BademanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BademanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
