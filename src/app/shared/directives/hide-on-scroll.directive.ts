import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideOnScroll]',
})
export class HideOnScrollDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'animate__animated');
    window.onscroll = () => {
      if (window.scrollY > 50) {
        this.renderer.removeClass(this.el.nativeElement, 'animate__fadeInUp');
        this.renderer.addClass(this.el.nativeElement, 'animate__fadeOutUp');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'animate__fadeOutUp');
        this.renderer.addClass(this.el.nativeElement, 'animate__fadeInUp');
      }
    };
  }
}
