import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNavebarComponent } from './side-bar-navebar.component';

describe('SideBarNavebarComponent', () => {
  let component: SideBarNavebarComponent;
  let fixture: ComponentFixture<SideBarNavebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarNavebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarNavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
