import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Award } from '../../../../models/award';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardComponent {
  @Input() award: Award;
}
