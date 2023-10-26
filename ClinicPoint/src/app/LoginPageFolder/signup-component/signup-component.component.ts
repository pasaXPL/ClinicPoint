import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { initTE, Select, Input, Ripple } from 'tw-elements';
import { Account, Physician, Patient } from 'src/app/Model/models';
import { DataService } from 'src/app/Services/Shared/data.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent {
  accountObj: Account = {
    id: '',
    username: '',
    password: '',
    role: ''
  }

  patientObj : Patient = {
    id: '',
    firstname: 'To be updated',
    lastname: '',
    email: 'N/A',
    contactno: 'N/A',
    birthdate: '',
    address: 'N/A',
    createdat: '',
    status: 'On Hold',
    gender: 'Male',
    image: ''
  }

  physicianObj : Physician = {
    id: '',
    firstname: 'To be updated',
    lastname: '',
    email: 'N/A',
    contactno: 'N/A',
    birthdate: '',
    address: 'N/A',
    createdat: '',
    status: 'On Hold',
    gender: 'Male',
    specialty: '',
    license: '',
    dayoff: '',
    image: ''
  }

  role: string = 'Clinic';
  username: string = '';
  password: string = '';

  constructor(private auth:AuthService, private router:Router, private data:DataService){}

  ngOnInit() {

    initTE({ Input, Ripple, Select });
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  getClinicButtonClass(): string {
    // Determine the CSS class based on the status value
    if (this.role === 'Clinic') {
      return 'flex justify-center w-full px-6 py-3 text-white bg-[#179182] rounded-md md:w-auto md:mx-2 focus:outline-none';
    } else {
      return 'flex justify-center w-full px-6 py-3 mt-4 text-[#179182] border border-[#179182] rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-[#179182] dark:text-[#179182] focus:outline-none';
    }
  }

  getPatientButtonClass(): string {
    // Determine the CSS class based on the status value
    if (this.role === 'Patient') {
      return 'flex justify-center w-full px-6 py-3 text-white bg-[#179182] rounded-md md:w-auto md:mx-2 focus:outline-none';
    } else {
      return 'flex justify-center w-full px-6 py-3 mt-4 text-[#179182] border border-[#179182] rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-[#179182] dark:text-[#179182] focus:outline-none';
    }
  }

  getPhysicianButtonClass(): string {
    // Determine the CSS class based on the status value
    if (this.role === 'Physician') {
      return 'flex justify-center w-full px-6 py-3 text-white bg-[#179182] rounded-md md:w-auto md:mx-2 focus:outline-none';
    } else {
      return 'flex justify-center w-full px-6 py-3 mt-4 text-[#179182] border border-[#179182] rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-[#179182] dark:text-[#179182] focus:outline-none';
    }
  }

  updateRole(role: string){
    this.role = role;
  }

  onSubmit(): void {
    if(this.username === '' || this.password === '' || this.username === null || this.password ===  null){
      alert('Fill all input fields in the form');
      return;
    }

    const currentDate: Date = new Date();
    const dateString: string = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    if (window.confirm('Do you still want to create your account?')) {
      this.accountObj.username = this.username!;
      this.accountObj.password = this.password!;
      this.accountObj.role = this.role;

      if(this.role === 'Patient'){
        this.patientObj.createdat = dateString;
        this.data.createPatientAccount(this.accountObj, this.patientObj)
        this.router.navigate(['login']);
      }
      else if(this.role === 'Physician'){
        this.physicianObj.createdat = dateString;
        this.data.createPhysicianAccount(this.accountObj, this.physicianObj)
        this.router.navigate(['login']);
      }
    }
  }
}
