import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: string;
  private span: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.span = this.renderer.createElement('span');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    this.span.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.span);
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'left');
    this.renderer.setStyle(this.span, 'font-size', '10px');
  }
  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.span);
  }


}
