import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Position } from '../../../models/position';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  @Input() positions: Position[];
}
