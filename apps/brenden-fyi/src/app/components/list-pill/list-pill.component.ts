import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-pill',
  template: `
    <li
      class="m-1 first:ml-0 py-1 px-2 bg-blue-400 text-white text-center border border-blue-600 rounded-lg"
    >
      <ng-content></ng-content>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPillComponent {}
