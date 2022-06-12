import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { environment } from '../environments/environment';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    ComponentsModule,
    ScullyLibModule,
  ],
  providers: [
    { provide: 'STORYBLOK_TOKEN', useValue: environment.STORYBLOK_TOKEN },
    { provide: 'STORYBLOK_VERSION', useValue: environment.STORYBLOK_VERSION },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
