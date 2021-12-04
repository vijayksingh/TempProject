import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
   }
  
   ngAfterViewInit(): void {
    let text = this.el.nativeElement.textContent;

    // Offset Width vs Scroll Width
    console.log(this.el.nativeElement.offsetWidth);
    if(this.el.nativeElement.scrollWidth > this.el.nativeElement.offsetWidth)
      this.renderer.setAttribute(this.el.nativeElement, "title", text);
  }


  
}
