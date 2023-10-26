export interface Models {
}

export interface Account {
  id: string;
  username: string;
  password: string;
  role: string;
}

export interface Patient {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  contactno: string;
  address: string;
  createdat: string;
  status: string;
  gender: string;
  image: string;
}

export interface Physician {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  contactno: string;
  address: string;
  createdat: string;
  status: string;
  gender: string;
  specialty: string;
  image: string;
  license: string;
  dayoff:string;
}

export interface Clinic {
  id: string;
  clinicName: string;
  clinicOwner: string;
  description: string;
  file1:string;
  file2:string;
  logo:string;
  contactno:string;
  dayoff:string;
}

export interface Admin {
  id: string;
  name: string;
}

