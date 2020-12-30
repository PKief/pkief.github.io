import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatToolbar)
  toolbar: MatToolbar;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.toggleVisibility();
    this.hasScrolled = true;
  }

  theme: Observable<string>;
  hasScrolled = false;

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.theme = this.themeService.theme;
  }

  private toggleVisibility() {
    const scrollTop = document.scrollingElement.scrollTop;
    const clientHeight = document.scrollingElement.clientHeight;
    const toolbarElement = this.toolbar._elementRef
      .nativeElement as HTMLElement;
    const fadeInAnimation = 'animate__fadeInDown';
    const fadeOutAnimation = 'animate__fadeOutUp';
    const hideClass = 'hide';
    const threshold = 200;
    if (scrollTop + threshold > clientHeight) {
      this.renderer.removeClass(toolbarElement, fadeOutAnimation);
      this.renderer.removeClass(toolbarElement, hideClass);
      this.renderer.addClass(toolbarElement, fadeInAnimation);
    } else if (this.hasScrolled) {
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

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
