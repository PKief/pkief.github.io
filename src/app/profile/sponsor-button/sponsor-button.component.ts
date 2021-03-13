import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sponsor-button',
  templateUrl: './sponsor-button.component.html',
  styleUrls: ['./sponsor-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SponsorButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
