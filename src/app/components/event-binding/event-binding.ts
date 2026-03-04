import { CommonModule, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

interface Student {
  name: string,
  age: number,
  contact: number,
  email: string,
  address: {
    city: string,
    state: string,
    pincode: number
  }
}

interface Person {
  name: string,
  email: string,
  contact: number
}

@Component({
  selector: 'app-event-binding',
  imports: [CommonModule,JsonPipe,FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding implements AfterViewInit {
  // click Event Binding

  myStudentDetails: WritableSignal<Student> = signal<Student>({
    name: 'abhsishek kale',
    age: 32,
    contact: 2323222323,
    email: 'abhi@gmail.com',
    address: {
      city: 'amravati',
      state: 'MH',
      pincode: 333505
    }
  });

  onChangeStudentsDetails() {
    setTimeout(() => {
      alert('Change Student Details')
      this.myStudentDetails.set({
        name: 'mohit kale',
        age: 29,
        contact: 44444444,
        email: 'Mohit@gmail.com',
        address: {
          city: 'Pune',
          state: 'MH',
          pincode: 555909
        }
      })
    }, 2000)
  }

  // Mouse Enter And Leave Event Binding
  isActiveCondition: WritableSignal<boolean> = signal<boolean>(true);

  myImageImage: WritableSignal<string> = signal<string>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYSmQklo0qWAVlhlrBc9KL_rFr-eX8eH4uw&s');

  myParagraph: WritableSignal<string> = signal<string>('A sample text paragraph is a written section that illustrates a specific idea or theme. It typically includes a topic sentence, supporting details, and a concluding sentence. Sample paragraphs can be used for various purposes, such as demonstrating writing style, presenting information, or providing examples in educational contexts.');

  onMouseEnterParagraph() {
    this.myParagraph.set('The sun dipped below the horizon, casting a warm golden glow over the tranquil lake. The water shimmered like a thousand diamonds, reflecting the hues of orange and pink that painted the sky. A gentle breeze rustled the leaves of the nearby trees, creating a soothing melody that echoed through the quiet evening. In that moment, time seemed to stand still, inviting anyone who witnessed it to pause and appreciate the beauty of nature.');
  }

  onMouseLeaveParagraph() {
    this.isActiveCondition.set(false);
  }

  // keydown and keyup Event
  myTypeText: WritableSignal<string> = signal<string>('');

  // keyDown
  onKeyDown(event: KeyboardEvent) {
    console.log('Key Down .>>>>', event.key);
    this.myTypeText.set(event.key);
  }

  // keyUp
  onKeyUp(event: KeyboardEvent) {
    console.log('Key Up .>>>>', event.key);
    this.myTypeText.set(event.key);
  }

  // keyup.enter event

  mySubjectName: WritableSignal<string> = signal<string>('Angular 11');

  onKeyupEnter(event: Event) {
    this.mySubjectName.set((event.target as HTMLInputElement).value);
  }

  onKeyupEnterMethod(event: KeyboardEvent) {

    // keyCode using code number with enter button 13

    // if (event.keyCode === 13) {
    //   this.mySubjectName.set((event.target as HTMLInputElement).value);
    // }

    // code using Enter Keyboard button
    if (event.code === 'Enter') {
      this.mySubjectName.set((event.target as HTMLInputElement).value);
    }
  }


  // input event
  myEmailAddress: WritableSignal<string> = signal<string>('');

  onInputEvent(event: Event) {

    const myEmailPayLoad = signal((event.target as HTMLInputElement).value)
    this.myEmailAddress.set(myEmailPayLoad());

  }

  // focus Event
  onFocusInput() {
    console.log('success fully focus input....')
  }


  // blur Event
  onblurInput() {
    console.log('Input Lost Focus!');
  }

  // blur and focus Event

  // method 1
  isFocused = signal(false);

  // method 2
  isActiveFocused = signal(false);

  @ViewChild('myInput') myInput!: ElementRef;

  ngAfterViewInit(): void {
    this.myInput?.nativeElement.focus();
  }

  // submit Event

  myDisplay: WritableSignal<any> = signal<any>('');

  myPerson: Person = {
    name: '',
    email: '',
    contact: 0
  };

  onSubmitForm() {
    this.myDisplay.set(this.myPerson);
  }

}
