import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DoctorComponent } from './component/doctor/doctor.component';
import { TestCartComponent } from './component/test-cart/test-cart.component';
import { AdmissionComponent } from './component/admission/admission.component';

import { AppointmentComponent } from './component/appointment/appointment.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { BillComponent } from './component/bill/bill.component';
import { DischargeComponent } from './component/discharge/discharge.component';
import { PasentsarchComponent } from './component/pasentsarch/pasentsarch.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HomeComponent } from './component/home/home.component';
import { PdfComponent } from './component/pdf/pdf.component';
import { BademanageComponent } from './component/bademanage/bademanage.component';
import { MainBodyComponent } from './template/main-body/main-body.component';
import { MainLoginComponent } from './template/main-login/main-login.component';
import { MainLoginLayoutComponent } from './template/main-login-layout/main-login-layout.component';
import { MainBodyLayoutComponent } from './template/main-body-layout/main-body-layout.component';
import { TestAndPatientComponent } from './component/test-patient/test-patient.component';

const routes: Routes = [
  { path: '', component: MainLoginLayoutComponent,children:[
    { path: 'login', component: MainLoginComponent },
  ] },

  { path: '', component: MainBodyLayoutComponent,children:[
    { path: 'sidebar', component: SideBarComponent },
    // { path: '', redirectTo: 'sidebar', pathMatch: 'full' },
   {path:"doctors", component:DoctorComponent} ,
   {path:"test", component:TestCartComponent},
   {path:"admission", component:AdmissionComponent} ,
   {path:"appointment", component:AppointmentComponent} ,
   {path:"employee", component:EmployeeComponent} ,
   {path:"bill", component:BillComponent} ,
   {path:"discharge", component:DischargeComponent} ,
   {path:"pasentsarch", component:PasentsarchComponent} ,
   {path:"home", component:HomeComponent} ,
   {path:"pdf/:id", component:PdfComponent} ,
   {path:"bade", component:BademanageComponent}, 
   {path:"dashboard", component:MainBodyComponent},
   {path:"test-patient", component:TestAndPatientComponent},
  ] },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }, 


//  {path:"sidbar", component:SidbarComponent} ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
