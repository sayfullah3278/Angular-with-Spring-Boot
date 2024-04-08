import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceSidebarComponent } from './nice-sidebar.component';

describe('NiceSidebarComponent', () => {
  let component: NiceSidebarComponent;
  let fixture: ComponentFixture<NiceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiceSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
