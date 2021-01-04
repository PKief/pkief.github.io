import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [ProfileListComponent],
  imports: [CommonModule],
  exports: [ProfileListComponent],
})
export class ProfileModule {}
