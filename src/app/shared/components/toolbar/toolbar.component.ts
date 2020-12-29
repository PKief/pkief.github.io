import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements AfterViewInit {
  @ViewChild(MatToolbar)
  toolbar: MatToolbar;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.toggleVisibility();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private toggleVisibility() {
    const scrollTop = document.scrollingElement.scrollTop;
    const clientHeight = document.scrollingElement.clientHeight;
    const toolbarElement = this.toolbar._elementRef
      .nativeElement as HTMLElement;
    const fadeInAnimation = 'animate__fadeInDown';
    const fadeOutAnimation = 'animate__fadeOutUp';
    const threshold = 100;
    if (scrollTop + threshold > clientHeight) {
      this.renderer.removeClass(toolbarElement, fadeOutAnimation);
      this.renderer.addClass(toolbarElement, fadeInAnimation);
    } else {
      this.renderer.removeClass(toolbarElement, fadeInAnimation);
      this.renderer.addClass(toolbarElement, fadeOutAnimation);
    }
  }

  ngAfterViewInit() {
    this.renderer.addClass(
      this.toolbar._elementRef.nativeElement,
      'animate__animated'
    );
    this.toggleVisibility();
  }
}
