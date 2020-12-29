import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollDownIndicatorComponent } from './components/scroll-down-indicator/scroll-down-indicator.component';
import { HideOnScrollDirective } from './directives/hide-on-scroll.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [HideOnScrollDirective, ScrollDownIndicatorComponent],
  imports: [MaterialModule, CommonModule],
  exports: [
    MaterialModule,
    HideOnScrollDirective,
    ScrollDownIndicatorComponent,
  ],
})
export class SharedModule {}
