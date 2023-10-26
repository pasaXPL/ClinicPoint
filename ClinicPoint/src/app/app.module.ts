import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Pages
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

//PWA
import { ServiceWorkerModule } from '@angular/service-worker';

//Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LandingPageComponent } from './LandingPageFolder/landing-page/landing-page.component';
import { ClinicPageComponent } from './MainPageFolder/ClinicPage/clinic-page/clinic-page.component';

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
    SettingPageMainComponentComponent,
    LandingPageComponent,
    ClinicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
