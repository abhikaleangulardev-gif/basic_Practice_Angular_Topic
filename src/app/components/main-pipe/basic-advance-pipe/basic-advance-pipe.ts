import { AsyncPipe, CommonModule, JsonPipe, SlicePipe } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';

interface User {
  name: string,
  age: number,
  email: string,
  contact: number,
  city: string,
}

@Component({
  selector: 'app-basic-advance-pipe',
  imports: [CommonModule, JsonPipe, SlicePipe, AsyncPipe],
  templateUrl: './basic-advance-pipe.html',
  styleUrl: './basic-advance-pipe.css',
})
export class BasicAdvancePipe implements OnInit {
  myUser: WritableSignal<User> = signal<User>({
    name: 'abhishek kale',
    age: 33,
    email: "abhi@gmail.com",
    contact: 2323223,
    city: 'Pune'
  });

  myRollNo: WritableSignal<number[]> = signal<number[]>([10, 20, 30, 40, 50]);

  myText: WritableSignal<string> = signal<string>('This is a simple normal text example containing fifty nine char');

  // async pipe
  // myCounter$: WritableSignal<number> = signal<number>(0);
  myCounter$ = interval(1000);

  ngOnInit(): void {
    // setInterval(() => {
    //   this.myCounter$.update(v => v + 1);
    // }, 1000);
  }
}
