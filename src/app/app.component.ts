import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import AOS from 'aos';
import { Observable } from 'rxjs';
import { IconService } from './core/icon.service';
import { ThemeService } from './core/theme.service';
import { Project } from './project/models/project';
import { ProjectService } from './project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  projects: Observable<Project[]>;
  theme: Observable<string>;

  constructor(
    private projectService: ProjectService,
    private themeService: ThemeService,
    private iconService: IconService
  ) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.theme = this.themeService.theme;
    this.iconService.registerIcons();
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
    });
  }
}
