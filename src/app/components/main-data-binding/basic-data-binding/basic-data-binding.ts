import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Student {
  name: string,
  age: number,
  branch: string,
  email: string,
  contact: number
}

@Component({
  selector: 'app-basic-data-binding',
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './basic-data-binding.html',
  styleUrl: './basic-data-binding.css',
})
export class BasicDataBinding {
  myFullName: WritableSignal<string> = signal('abhishek kale');

  mySubjectTitleName: WritableSignal<string> = signal('Angular 17');


  //  string interpolation binding
  onChangeFullName() {
    this.myFullName.set('vandana kale');
  }

  // property binding

  onChangeSubjectTitleName() {
    this.mySubjectTitleName.set('Next Js');
  }


  //  Two way binding
  myMovieName: WritableSignal<string> = signal('Tiger');

  onMovieNameChange(eve: any) {
    console.log(eve);
    this.myMovieName.set(eve);
  }


  // i have create in one object. object name is student
  myStudent: WritableSignal<Student> = signal<Student>({
    name: 'abhishek kale',
    age: 33,
    branch: 'mechanical engg',
    email: 'abhi@gmail.com',
    contact: 23232323
  });


  updateStudentDetails(key: string, value: any) {
    console.log({ key, value });
    this.myStudent.update((std: any) => ({ ...std, [key]: value }));
  }

}
