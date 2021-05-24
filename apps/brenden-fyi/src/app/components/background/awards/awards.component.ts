import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Award } from '../../../models/award';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsComponent {
  @Input() awards: Award[];
}
