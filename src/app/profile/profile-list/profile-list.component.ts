import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileEntry } from '../models/profile-entry';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileListComponent implements OnInit {
  profileEntries: Observable<ProfileEntry[]>;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileEntries = this.profileService.getProfileEntries();
  }
}
