import { Component, ViewChild, ElementRef } from '@angular/core';
import { Physician } from 'src/app/Model/models';
import { DataService } from 'src/app/Services/Shared/data.service';
import { initTE, Modal, Ripple, Input, Select, Datepicker } from 'tw-elements';

@Component({
  selector: 'app-doctor-page-main-component',
  templateUrl: './doctor-page-main-component.component.html',
  styleUrls: ['./doctor-page-main-component.component.scss']
})
export class DoctorPageMainComponentComponent {
  @ViewChild('openViewPhysician') viewPhysicianModal!: ElementRef;

  physicianList: Physician[] = [];

  selectedPhysician : Physician = {
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
    image: '',
    license: '',
    specialty: '',
    dayoff: '',
  };

  constructor(private data:DataService){}

  ngOnInit(){
    initTE({ Modal, Ripple, Input, Select, Datepicker });
    this.getAllPhysician();
  }

  getAllPhysician() {
    this.data.getAllPhysicians().subscribe(res => {
      this.physicianList = res.map((e: any) => {
        const data = e.payload.doc.data();
        //data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching student data');
    })

  }

  openViewPhysicianModal(physician: Physician) {
    this.selectedPhysician = physician;
    this.viewPhysicianModal.nativeElement.click();
  }
}
