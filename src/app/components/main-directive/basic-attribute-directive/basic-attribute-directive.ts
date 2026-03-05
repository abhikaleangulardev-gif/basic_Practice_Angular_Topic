import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-basic-attribute-directive',
  imports: [CommonModule],
  templateUrl: './basic-attribute-directive.html',
  styleUrl: './basic-attribute-directive.css',
})
export class BasicAttributeDirective {
  // [ngClass]
  isSpecial: WritableSignal<boolean> = signal<boolean>(false);
  canSave: WritableSignal<boolean> = signal<boolean>(false);

  toggleState() {
    setTimeout(() => {
      this.isSpecial.set(true);
      this.canSave.set(true);
    }, 2000)
  }


  // [ngStyle]

  textColor: WritableSignal<string> = signal<string>('green');
  fontSize: WritableSignal<string> = signal<string>('20px');
  borderSize: WritableSignal<string> = signal<string>('2px solid red');

  onChangeStyling() {
    this.textColor.set('pink');
    this.fontSize.set('18px');
    this.borderSize.set('2px solid yellow');
  }

  // new feature

  // [class.active]
  isActive: WritableSignal<boolean> = signal<boolean>(false);
  onChangeActiveclass() {
    this.isActive.set(true);
  }



  // [style.color]
  myStylingObj: WritableSignal<any> = signal({
    'font-size': '20px',
    'padding': '10px',
    'color': 'green',
    'border': '2px solid red'
  });

  onChangeStyle() {
    this.myStylingObj.set({
      'font-size': '30px',
      'padding': '20px',
      'color': 'red',
      'border': '3px solid back'
    })
  }

  // aria-expanded or role="region"
  // ariaMenu, ariaMenuItem, and ariaAccordion

}
