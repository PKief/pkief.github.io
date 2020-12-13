import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HideOnScrollDirective } from './directives/hide-on-scroll.directive';

@NgModule({
  declarations: [HideOnScrollDirective],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule, HideOnScrollDirective],
})
export class SharedModule {}
