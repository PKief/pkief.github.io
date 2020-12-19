import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { projects } from './projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'personal-website';
  projects: any[];

  ngOnInit() {
    this.projects = projects;
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
    });
  }
}
