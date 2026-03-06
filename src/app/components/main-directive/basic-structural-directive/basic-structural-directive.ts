import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

interface Passanger {
  name: string;
  seat: string;
  checkedIn: boolean
}

interface StudentResult {
  name: string;
  math: number;
  science: number;
  english: number;
  totalScore: number;
  hasPassed: boolean;
}

interface Patients {
  name: string,
  age: number,
  gender: string,
  disease: string,
  doctor: string
}

@Component({
  selector: 'app-basic-structural-directive',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './basic-structural-directive.html',
  styleUrl: './basic-structural-directive.css',
})
export class BasicStructuralDirective {
  // *ngFor
  myStudentName: WritableSignal<string[]> = signal<string[]>(['ram', 'alok', 'abhishek', 'mohit', 'meena', 'jamme']);

  myPassangerList: WritableSignal<Passanger[]> = signal<Passanger[]>([
    { name: "Alice Smith", seat: "12A", checkedIn: true },
    { name: "Bob Johnson", seat: "12B", checkedIn: false },
    { name: "Charlie Davis", seat: "14C", checkedIn: true }
  ]);

  // *ngIf and else condition

  isDisplayResult: WritableSignal<boolean> = signal<boolean>(false);

  studentResults: WritableSignal<StudentResult[]> = signal<StudentResult[]>([
    { name: "Alice", math: 85, science: 90, english: 78, totalScore: 253, hasPassed: true },
    { name: "Bob", math: 40, science: 35, english: 50, totalScore: 125, hasPassed: false },
    { name: "Charlie", math: 72, science: 68, english: 80, totalScore: 220, hasPassed: true }
  ]);

  onDisplayResult() {
    setTimeout(() => {
      alert('Display To The Result with Student Marksheet...');
      this.isDisplayResult.set(true);
    }, 2000);
  }

  // @for
  isPatientsActive: WritableSignal<boolean> = signal<boolean>(false);

  patients: WritableSignal<Patients[]> = signal<Patients[]>([
    {
      name: "Rahul Patil",
      age: 32,
      gender: "Male",
      disease: "Fever",
      doctor: "Dr. Sharma"
    },
    {
      name: "Priya Kulkarni",
      age: 28,
      gender: "Female",
      disease: "Diabetes",
      doctor: "Dr. Mehta"
    },
    {
      name: "Amit Joshi",
      age: 45,
      gender: "Male",
      disease: "Blood Pressure",
      doctor: "Dr. Singh"
    },
    {
      name: "Sneha Deshmukh",
      age: 35,
      gender: "Female",
      disease: "Headache",
      doctor: "Dr. Patel"
    },
    {
      name: "Rohit Jadhav",
      age: 29,
      gender: "Male",
      disease: "Cold",
      doctor: "Dr. Kulkarni"
    },
    {
      name: "Anjali Pawar",
      age: 40,
      gender: "Female",
      disease: "Asthma",
      doctor: "Dr. Verma"
    },
    {
      name: "Suresh Shinde",
      age: 50,
      gender: "Male",
      disease: "Heart Problem",
      doctor: "Dr. Gupta"
    },
    {
      name: "Pooja Chavan",
      age: 27,
      gender: "Female",
      disease: "Migraine",
      doctor: "Dr. Joshi"
    },
    {
      name: "Vikas More",
      age: 38,
      gender: "Male",
      disease: "Back Pain",
      doctor: "Dr. Patil"
    }
  ]);

  onDisplayPatients() {
    setTimeout(() => {
      alert('Display Patients List >>>>>>');
      this.isPatientsActive.set(true);
    }, 2000)
  }

  // @if
  myStatus: WritableSignal<string> = signal<string>('');

  onChangeStatus(eve: any) {
    console.log(eve.target.value);
    this.myStatus.set(eve.target.value);
  }

  // @let
  // example -1
  myName: WritableSignal<string> = signal<string>('Abhishek Kale');


  // example - 2
  myPerson: WritableSignal<any> = signal<any>({
    name: 'Mohit Kale',
    age: 30,
    gender: 'Male'
  });

  // example - 3

  getTotal() {
    return 100;
  }
  // @switch
  status:WritableSignal<string> = signal<string>('');

  onChangestatus(eve:any){
    this.status.set(eve.target.value);
  }
}
