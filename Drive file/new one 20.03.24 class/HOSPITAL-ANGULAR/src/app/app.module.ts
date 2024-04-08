import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { AdmissionComponent } from './component/admission/admission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TestCartComponent } from './component/test-cart/test-cart.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { BillComponent } from './component/bill/bill.component';
import { DischargeComponent } from './component/discharge/discharge.component';
import { PasentsarchComponent } from './component/pasentsarch/pasentsarch.component';
import { SideBarNavebarComponent } from './component/side-bar-navebar/side-bar-navebar.component';
import { NiceSidebarComponent } from './component/nice-sidebar/nice-sidebar.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HomeComponent } from './component/home/home.component';
import { PdfComponent } from './component/pdf/pdf.component';
import { DatePipe } from '@angular/common';
import { BademanageComponent } from './component/bademanage/bademanage.component';
import { MainHeaderComponent } from './template/main-header/main-header.component';
import { MainSidebarComponent } from './template/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './template/main-footer/main-footer.component';
import { MainBodyComponent } from './template/main-body/main-body.component';
import { MainLoginComponent } from './template/main-login/main-login.component';
import { MainLoginLayoutComponent } from './template/main-login-layout/main-login-layout.component';
import { MainBodyLayoutComponent } from './template/main-body-layout/main-body-layout.component';
import { TestAndPatientComponent } from './component/test-patient/test-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    AdmissionComponent,
    TestCartComponent,
    AppointmentComponent,
    EmployeeComponent,
    BillComponent,
    DischargeComponent,
    PasentsarchComponent,
    SideBarNavebarComponent,
    NiceSidebarComponent,
    SideBarComponent,
    HomeComponent,
    PdfComponent,
    BademanageComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    MainBodyComponent,
    MainLoginComponent,
    MainLoginLayoutComponent,
    MainBodyLayoutComponent,
    TestAndPatientComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    DatePipe 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
