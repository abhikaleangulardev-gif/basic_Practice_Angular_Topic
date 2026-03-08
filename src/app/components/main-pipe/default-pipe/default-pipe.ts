import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-default-pipe',
  imports: [CommonModule],
  templateUrl: './default-pipe.html',
  styleUrl: './default-pipe.css',
})
export class DefaultPipe {
  // text format
  myFirstName: WritableSignal<string> = signal<string>('Abhishek');
  myMiddleName: WritableSignal<string> = signal<string>('Sahebrao');
  myLastName: WritableSignal<string> = signal<string>('Kale');

  // number format
  myPrice: WritableSignal<number> = signal<number>(12345.678);
  myPercentage: WritableSignal<number> = signal<number>(0.85);

  // Currency Pipe 
  mySalary:WritableSignal<number> = signal<number>(50000);

  // Date
  myDate:WritableSignal<Date> = signal<Date>(new Date);
}
