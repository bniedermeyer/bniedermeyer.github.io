import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Position } from '../../../models/position';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityComponent {
  @Input() positions: Position[];
}
