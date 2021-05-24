import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {
  @Input() current: boolean;
  @Input() title: string;
  @Input() company: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() description: string;
  @Input() highlights: { value: string }[];
}
