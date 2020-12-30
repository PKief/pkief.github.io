import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent implements AfterViewInit {
  @ViewChild('section')
  section: ElementRef;

  @Input()
  colorTheme: string;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.colorTheme) {
      this.section.nativeElement.classList.add(this.colorTheme);
    }
  }
}
