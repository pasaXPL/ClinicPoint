import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageMainComponentComponent } from './MainPageFolder/DashboardPage/dashboard-page-main-component/dashboard-page-main-component.component';
import { MainPageMainComponentComponent } from './MainPageFolder/MainPage/main-page-main-component/main-page-main-component.component';
import { AppointmentPageMainComponentComponent } from './MainPageFolder/AppointmentPage/appointment-page-main-component/appointment-page-main-component.component';
import { DoctorPageMainComponentComponent } from './MainPageFolder/DoctorPage/doctor-page-main-component/doctor-page-main-component.component';
import { InvoicePageMainComponentComponent } from './MainPageFolder/InvoicePage/invoice-page-main-component/invoice-page-main-component.component';
import { MapPageMainComponentComponent } from './MainPageFolder/MapPage/map-page-main-component/map-page-main-component.component';
import { MessagePageMainComponentComponent } from './MainPageFolder/MessagePage/message-page-main-component/message-page-main-component.component';
import { PatientPageMainComponentComponent } from './MainPageFolder/PatientPage/patient-page-main-component/patient-page-main-component.component';
import { SchedulerPageMainComponentComponent } from './MainPageFolder/SchedulerPage/scheduler-page-main-component/scheduler-page-main-component.component';
import { SettingPageMainComponentComponent } from './MainPageFolder/SettingPage/setting-page-main-component/setting-page-main-component.component';
import { LoginComponentComponent } from './LoginPageFolder/login-component/login-component.component';
import { LoginMainPageComponent } from './LoginPageFolder/login-main-page/login-main-page.component';
import { SignupComponentComponent } from './LoginPageFolder/signup-component/signup-component.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainPageMainComponentComponent,
    children :[
      { path: '', component: DashboardPageMainComponentComponent },
      { path: 'appointment', component: AppointmentPageMainComponentComponent },
      { path: 'physician', component: DoctorPageMainComponentComponent },
      { path: 'invoice', component: InvoicePageMainComponentComponent },
      { path: 'map', component: MapPageMainComponentComponent },
      { path: 'message', component: MessagePageMainComponentComponent },
      { path: 'patient', component: PatientPageMainComponentComponent },
      { path: 'scheduler', component: SchedulerPageMainComponentComponent },
      { path: 'settings', component: SettingPageMainComponentComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '**', redirectTo:'/dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: LoginMainPageComponent,
    children: [
      { path: 'login', component: LoginComponentComponent },
      { path: 'signup', component: SignupComponentComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', redirectTo:'/login', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo:'/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
