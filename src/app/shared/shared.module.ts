import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollDownIndicatorComponent } from './components/scroll-down-indicator/scroll-down-indicator.component';
import { SectionComponent } from './components/section/section.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShowOnTopDirective } from './directives/show-on-top.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ShowOnTopDirective,
    ScrollDownIndicatorComponent,
    ToolbarComponent,
    SectionComponent,
    FooterComponent,
  ],
  imports: [MaterialModule, CommonModule],
  exports: [
    MaterialModule,
    ShowOnTopDirective,
    ScrollDownIndicatorComponent,
    ToolbarComponent,
    SectionComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
