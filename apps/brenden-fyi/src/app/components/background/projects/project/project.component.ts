import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input() project: Project;
}
