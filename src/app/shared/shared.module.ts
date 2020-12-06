import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule],
})
export class SharedModule {}
