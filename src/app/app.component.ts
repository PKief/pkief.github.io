import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'personal-website';

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
    });
  }
}
