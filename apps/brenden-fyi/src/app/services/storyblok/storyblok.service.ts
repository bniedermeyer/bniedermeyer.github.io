import { Injectable, Inject } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

import StoryblokClient, { StoriesParams } from 'storyblok-js-client';
import { Resume } from '../../models/resume';

@Injectable({
  providedIn: 'root',
})
export class StoryblokService {
  private storyblokClient: StoryblokClient;

  constructor(
    @Inject('STORYBLOK_TOKEN') private storyblokToken: string,
    @Inject('STORYBLOK_VERSION') private storyblokVersion: 'draft' | 'published'
  ) {
    this.storyblokClient = new StoryblokClient({
      accessToken: this.storyblokToken,
      cache: {
        clear: 'auto',
        type: 'memory',
      },
    });
  }

  public getResumeData(): Observable<Resume> {
    const params: StoriesParams = { version: this.storyblokVersion };
    if (this.storyblokVersion === 'draft') {
      params.cv = Date.now();
    }
    return from(this.storyblokClient.get('cdn/stories/resume', params)).pipe(
      map((result) => result.data),
      map((data) => data.story),
      map((story) => story.content),
      tap((story) => console.log(story)),
      share()
    );
  }
}
