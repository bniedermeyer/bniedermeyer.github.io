import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from '../../../../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input() skill: Skill;
}
