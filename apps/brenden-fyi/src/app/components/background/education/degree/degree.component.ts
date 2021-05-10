import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Education } from '../../../../models/education';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DegreeComponent {
  @Input() degree: Education;
}
