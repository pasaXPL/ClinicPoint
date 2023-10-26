import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient, Account, Physician } from 'src/app/Model/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private fs: AngularFirestore) { }

  //Patients
  addPatient(patient: Patient){
    if(patient.id === ''){
      patient.id = this.fs.createId();
    }
    return this.fs.collection('/Patients').add(patient);
  }

  getAllPatients(){
    return this.fs.collection('/Patients').snapshotChanges();
  }

  deletePatient(patient: Patient){
    this.fs.doc('/Accounts/' + patient.id).delete();
    return this.fs.doc('/Patients/' + patient.id).delete();
  }

  async updatePatient(patient: Patient): Promise<void> {
    try {
      const querySnapshot = await this.fs.collection('/Patients', ref =>
        ref.where('id', '==', patient.id).limit(1)
      ).get().toPromise();

      if (querySnapshot.size > 0) {
        // Update the first document that matches the query
        const patientDocId = querySnapshot.docs[0].id;
        await this.fs.collection('/Patients').doc(patientDocId).update(patient);
        alert('Patient updated successfully');
      } else {
        console.log('Patient with patientid ' + patient.id + ' not found');
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  }

  async getPatientById(id: string): Promise<Patient | null>{
    const querySnapshot = await this.fs.collection('/Patients', ref =>
      ref.where('id', '==', id).limit(1)
    ).get().toPromise();

    if (querySnapshot.size > 0) {
      const patientData = querySnapshot.docs[0].data() as Patient;
      return { ...patientData };
    } else {
      return null;
    }
  }

  //Accounts
  createPatientAccount(account: Account, patient: Patient){
    account.id = this.fs.createId();
    patient.id = account.id;

    this.fs.collection('/Accounts').add(account);
    return this.fs.collection('/Patients').add(patient);
  }

  async loginAccount(username: string, password: string): Promise<Account | null>{
    const querySnapshot = await this.fs.collection('/Accounts', ref =>
      ref.where('username', '==', username).where('password', '==', password).limit(1)
    ).get().toPromise();

    if (querySnapshot.size > 0) {
      const patientData = querySnapshot.docs[0].data() as Account;
      return { ...patientData };
    } else {
      return null;
    }
  }

  //Physician
  getAllPhysicians(){
    return this.fs.collection('/Physicians').snapshotChanges();
  }

  createPhysicianAccount(account: Account, physician: Physician){
    account.id = this.fs.createId();
    physician.id = account.id;

    this.fs.collection('/Accounts').add(account);
    return this.fs.collection('/Physicians').add(physician);
  }

  async getPhysicianById(id: string): Promise<Physician | null>{
    const querySnapshot = await this.fs.collection('/Physicians', ref =>
      ref.where('id', '==', id).limit(1)
    ).get().toPromise();

    if (querySnapshot.size > 0) {
      const physicianData = querySnapshot.docs[0].data() as Physician;
      return { ...physicianData };
    } else {
      return null;
    }
  }

  async updatePhysician(physician: Physician): Promise<void> {
    try {
      const querySnapshot = await this.fs.collection('/Physicians', ref =>
        ref.where('id', '==', physician.id).limit(1)
      ).get().toPromise();

      if (querySnapshot.size > 0) {
        // Update the first document that matches the query
        const patientDocId = querySnapshot.docs[0].id;
        await this.fs.collection('/Physicians').doc(patientDocId).update(physician);
        alert('Physician updated successfully');
      } else {
        console.log('Physician with patientid ' + physician.id + ' not found');
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  }


}
