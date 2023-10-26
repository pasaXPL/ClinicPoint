import { Component } from '@angular/core';
import { Patient, Physician } from 'src/app/Model/models';
import { DataService } from 'src/app/Services/Shared/data.service';
import { AuthService } from 'src/app/Services/auth.service';
import { initTE, Modal, Ripple, Input, Select, Datepicker } from 'tw-elements';

@Component({
  selector: 'app-setting-page-main-component',
  templateUrl: './setting-page-main-component.component.html',
  styleUrls: ['./setting-page-main-component.component.scss']
})
export class SettingPageMainComponentComponent {
  constructor(private auth: AuthService, private data: DataService) { }

  selected = {
    firstname : '',
    lastname : '',
    contactno : '',
    birthdate : '',
    gender : '',
    address : '',
    email: ''
  }

  objectPhysician : Physician = {
    id: '',
    firstname: '',
    lastname: '',
    birthdate: '',
    email: '',
    contactno:'',
    address: '',
    createdat: '',
    status: '',
    gender: '',
    image: '',
    license: '',
    dayoff: '',
    specialty: ''
  }

  objectPatient : Patient = {
    id: '',
    firstname: '',
    lastname: '',
    birthdate: '',
    email: '',
    contactno:'',
    address: '',
    createdat: '',
    status: '',
    gender: '',
    image: ''
  }

  role : string = '';
  token : string = '';

  async ngOnInit() : Promise<void>  {

    initTE({ Modal, Ripple, Input, Select, Datepicker });
    this.role = this.auth.getAuth()!;
    var id = this.auth.getToken();
    this.token = id!;
    if(this.role === 'Patient'){
      var result = await this.data.getPatientById(id!);
      this.objectPatient = result!;
      this.selected.firstname = result?.firstname!;
      this.selected.lastname = result?.lastname!;
      this.selected.address = result?.address!;
      this.selected.gender = result?.gender!;
      this.selected.email = result?.email!;
      this.selected.contactno = result?.contactno!;
      this.selected.birthdate = result?.birthdate!;
    }
    else if(this.role === 'Physician'){
      var results = await this.data.getPhysicianById(id!);
      this.objectPhysician = results!;
      this.selected.firstname = results?.firstname!;
      this.selected.lastname = results?.lastname!;
      this.selected.address = results?.address!;
      this.selected.gender = results?.gender!;
      this.selected.email = results?.email!;
      this.selected.contactno = results?.contactno!;
      this.selected.birthdate = results?.birthdate!;
      console.log(this.objectPhysician.id);
    }
  }

  async onSave() : Promise<void>{

    if(this.role === 'Patient'){
      this.objectPatient.firstname = this.selected.firstname ;
      this.objectPatient.lastname = this.selected.lastname;
      this.objectPatient.address = this.selected.address;
      this.objectPatient.gender = this.selected.gender;
      this.objectPatient.email = this.selected.email;
      this.objectPatient.contactno = this.selected.contactno;
      this.objectPatient.birthdate = this.selected.birthdate;
      this.objectPatient.status = 'Active'
      this.objectPatient.id = this.token;
      await this.data.updatePatient(this.objectPatient);
    }
    else if(this.role === 'Physician')
    {
      this.objectPhysician.firstname = this.selected.firstname ;
      this.objectPhysician.lastname = this.selected.lastname;
      this.objectPhysician.address = this.selected.address;
      this.objectPhysician.gender = this.selected.gender;
      this.objectPhysician.email = this.selected.email;
      this.objectPhysician.contactno = this.selected.contactno;
      this.objectPhysician.birthdate = this.selected.birthdate;
      this.objectPhysician.status = 'Active'
      this.objectPhysician.id = this.token;
      await this.data.updatePhysician(this.objectPhysician);
    }
  }

}
