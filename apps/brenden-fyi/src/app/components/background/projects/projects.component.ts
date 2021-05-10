import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @Input() projects: Project[];
}
