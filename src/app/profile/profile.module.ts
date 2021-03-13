import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SponsorButtonComponent } from './sponsor-button/sponsor-button.component';

@NgModule({
  declarations: [ProfileListComponent, SponsorButtonComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileListComponent, SponsorButtonComponent],
})
export class ProfileModule {}
