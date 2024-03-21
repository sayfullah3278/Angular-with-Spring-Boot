import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyLayoutComponent } from './main-body-layout.component';

describe('MainBodyLayoutComponent', () => {
  let component: MainBodyLayoutComponent;
  let fixture: ComponentFixture<MainBodyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBodyLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainBodyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
