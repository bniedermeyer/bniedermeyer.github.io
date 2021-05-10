import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundSectionComponent {
  @Input() icon: string;
  @Input() title: string;
}
