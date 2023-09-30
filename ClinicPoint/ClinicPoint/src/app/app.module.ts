import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainPageComponent } from './LoginPageFolder/login-main-page/login-main-page.component';
import { LoginComponentComponent } from './LoginPageFolder/login-component/login-component.component';
import { SignupComponentComponent } from './LoginPageFolder/signup-component/signup-component.component';
import { MainPageMainComponentComponent } from './MainPageFolder/MainPage/main-page-main-component/main-page-main-component.component';
import { DashboardPageMainComponentComponent } from './MainPageFolder/DashboardPage/dashboard-page-main-component/dashboard-page-main-component.component';
import { SchedulerPageMainComponentComponent } from './MainPageFolder/SchedulerPage/scheduler-page-main-component/scheduler-page-main-component.component';
import { AppointmentPageMainComponentComponent } from './MainPageFolder/AppointmentPage/appointment-page-main-component/appointment-page-main-component.component';
import { PatientPageMainComponentComponent } from './MainPageFolder/PatientPage/patient-page-main-component/patient-page-main-component.component';
import { DoctorPageMainComponentComponent } from './MainPageFolder/DoctorPage/doctor-page-main-component/doctor-page-main-component.component';
import { MessagePageMainComponentComponent } from './MainPageFolder/MessagePage/message-page-main-component/message-page-main-component.component';
import { InvoicePageMainComponentComponent } from './MainPageFolder/InvoicePage/invoice-page-main-component/invoice-page-main-component.component';
import { SettingPageMainComponentComponent } from './MainPageFolder/SettingPage/setting-page-main-component/setting-page-main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    //Pages Folder
    LoginMainPageComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    MainPageMainComponentComponent,
    DashboardPageMainComponentComponent,
    SchedulerPageMainComponentComponent,
    AppointmentPageMainComponentComponent,
    PatientPageMainComponentComponent,
    DoctorPageMainComponentComponent,
    MessagePageMainComponentComponent,
    InvoicePageMainComponentComponent,
    SettingPageMainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
