import { Component, Input } from '@angular/core';
import { Resume } from '../../models/resume';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
})
export class BackgroundComponent {
  @Input() resume: Resume;
}
