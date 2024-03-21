import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoginLayoutComponent } from './main-login-layout.component';

describe('MainLoginLayoutComponent', () => {
  let component: MainLoginLayoutComponent;
  let fixture: ComponentFixture<MainLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLoginLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
