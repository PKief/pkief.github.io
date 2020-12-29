import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Observable } from 'rxjs';
import { Project } from './project/models/project';
import { ProjectService } from './project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
    });
  }
}
