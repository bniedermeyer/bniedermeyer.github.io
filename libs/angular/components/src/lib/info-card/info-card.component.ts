import { Component } from '@angular/core';

@Component({
  selector: 'lib-info-card',
  template: `
    <div
      class="rounded-md border border-purple-300 bg-white px-16 py-8 shadow-md md:w-96 md:px-8 md:py-12 "
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class InfoCardComponent {}
