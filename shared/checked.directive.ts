import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit{
  


  constructor(private el: ElementRef,private renderer: Renderer2 ) { }

  ngOnInit(): void {
    let elementLi = this.el.nativeElement;
    this.renderer.setStyle(elementLi, 'list-style-image', 'url(/assets/done.png)');
    this.renderer.setStyle(elementLi, 'background', 'rgba(128, 128, 0, 0.20)');
    this.renderer.setStyle(elementLi, 'text-align', 'left');

  }
}
