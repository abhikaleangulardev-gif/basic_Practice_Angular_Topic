import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-ng-model-ng-model-change',
  imports: [CommonModule,FormsModule],
  templateUrl: './basic-ng-model-ng-model-change.html',
  styleUrl: './basic-ng-model-ng-model-change.css',
})
export class BasicNgModelNgModelChange {
   myName:WritableSignal<string> = signal<string>('Abhishek Kale');

   onChangeName(event:Event){
    console.log(event);
    // this.myName.set((event.target as HTMLInputElement).value);
   }
}
