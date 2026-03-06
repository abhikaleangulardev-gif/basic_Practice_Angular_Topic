import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligh]',
})
export class Highligh {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
      this.renderer.setStyle(this.el.nativeElement,'backgroundColor','green');
      this.renderer.setStyle(this.el.nativeElement,'color','black');
      this.renderer.setStyle(this.el.nativeElement,'padding','10px');
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid red');
      this.renderer.setStyle(this.el.nativeElement,'border-radius','15px');
  }

    @HostListener('mouseleave') onMouseLeave(){
      this.renderer.setStyle(this.el.nativeElement,'backgroundColor','pink');
      this.renderer.setStyle(this.el.nativeElement,'padding','15px');
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid yellow');
      this.renderer.setStyle(this.el.nativeElement,'border-radius','29px');
  }

}
