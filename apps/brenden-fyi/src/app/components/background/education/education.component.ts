import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Education } from '../../../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  @Input() education: Education[];
}
