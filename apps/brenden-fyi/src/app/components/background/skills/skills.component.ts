import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  @Input() skills: Skill[];
}
