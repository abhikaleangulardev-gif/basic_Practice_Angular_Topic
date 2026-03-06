import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Focus } from '../../../custom/focus';
import { Highligh } from '../../../custom/highligh';

@Component({
  selector: 'app-basic-custom-directive',
  imports: [CommonModule, Focus, Highligh],
  templateUrl: './basic-custom-directive.html',
  styleUrl: './basic-custom-directive.css',
})
export class BasicCustomDirective {
  myParagraph: WritableSignal<string> = signal("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
}
