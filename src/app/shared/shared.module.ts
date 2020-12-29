import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollDownIndicatorComponent } from './components/scroll-down-indicator/scroll-down-indicator.component';
import { SectionComponent } from './components/section/section.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HideOnScrollDirective } from './directives/hide-on-scroll.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HideOnScrollDirective,
    ScrollDownIndicatorComponent,
    ToolbarComponent,
    SectionComponent,
  ],
  imports: [MaterialModule, CommonModule],
  exports: [
    MaterialModule,
    HideOnScrollDirective,
    ScrollDownIndicatorComponent,
    ToolbarComponent,
    SectionComponent,
  ],
})
export class SharedModule {}
