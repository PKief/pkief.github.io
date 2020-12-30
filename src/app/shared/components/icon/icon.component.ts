import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IconService } from 'src/app/core/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()
  icon: string;

  iconsRegistered: Observable<boolean>;

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconsRegistered = this.iconService.iconsRegistered;
  }
}
