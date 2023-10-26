import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Patient } from 'src/app/Model/models';
import { DataService } from 'src/app/Services/Shared/data.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Modal, Ripple, Input, initTE, Select, Datepicker} from "tw-elements";

@Component({
  selector: 'app-patient-page-main-component',
  templateUrl: './patient-page-main-component.component.html',
  styleUrls: ['./patient-page-main-component.component.scss']
})
export class PatientPageMainComponentComponent {
  @ViewChild('openViewPatient') viewPatientModal!: ElementRef;
  @ViewChild('closeModals') closeModals!: ElementRef;

  selectedFile : File | undefined;
  patientsList: Patient[] = [];
  patientObj: Patient = {
    id: '',
    firstname: 'To be Added',
    lastname: '',
    email: 'N/A',
    contactno: 'N/A',
    birthdate: '',
    address: 'N/A',
    createdat: '',
    status: '',
    gender: 'Male',
    image: ''
  };

  id: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  contactno: string = '';
  address: string = '';
  birthdate: string = '';
  gender: string = 'Male';

  selectedPatient : Patient = {
    id: '',
    firstname: 'To be Added',
    lastname: '',
    email: 'N/A',
    contactno: 'N/A',
    birthdate: '',
    address: 'N/A',
    createdat: '',
    status: '',
    gender: 'Male',
    image: ''
  };

  isPatient = false;

  constructor(private data: DataService, private auth:AuthService) { }

  ngOnInit() {
    initTE({ Modal, Ripple, Input, Select, Datepicker });

    if(this.auth.getAuth() === "Patient"){
      this.isPatient = true;
    }

    this.getAllStudents();
  }

  getAllStudents() {
    this.data.getAllPatients().subscribe(res => {
      this.patientsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        //data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.contactno = '';
    this.address = '';
    this.gender = 'Male';
  }

  addPatient() {
    if (this.firstname == '' || this.lastname == '' || this.contactno == '' || this.email == '' || this.birthdate == '' || this.address == '') {
      alert('Fill all input fields in the form');
      return;
    }
    const currentDate: Date = new Date();
    const dateString: string = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    if (window.confirm('Are you sure you want to add ' + this.firstname + ' ' + this.lastname + ' ?')) {

      this.patientObj.id = '';
      this.patientObj.email = this.email;
      this.patientObj.firstname = this.firstname;
      this.patientObj.lastname = this.lastname;
      this.patientObj.contactno = this.contactno;
      this.patientObj.createdat = dateString;
      this.patientObj.status = 'Active'
      this.patientObj.gender = this.gender;
      this.patientObj.address = this.address;
      this.patientObj.birthdate = this.birthdate;

      this.data.addPatient(this.patientObj);
    }
    this.closeModal();
    this.resetForm();
  }

  async updatePatient(patient: Patient) :Promise<void> {
    if (window.confirm('Are you sure you want to update ' + patient.firstname + ' ' + patient.lastname + ' ?')) {
      await this.data.updatePatient(patient);
    }

    this.closeModal();
  }

  deletePatient(patient: Patient) {
    if (window.confirm('Are you sure you want to delete ' + patient.firstname + ' ' + patient.lastname + ' ?')) {
      this.data.deletePatient(patient);
    }
  }

  openViewPatientModal(patient: Patient) {
    this.selectedPatient = patient;
    this.viewPatientModal.nativeElement.click();
  }

  closeModal(){
    this.closeModals.nativeElement.click();
  }

}
