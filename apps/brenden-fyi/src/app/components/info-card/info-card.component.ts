import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { Resume } from '../../models/resume';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent implements OnChanges {
  @Input() resume: Resume;
  imageUrl: string;

  ngOnChanges() {
    if (this.resume) {
      this.imageUrl = this.resume.image.filename.replace(
        'a.storyblok.com',
        'img2.storyblok.com/filters:format(webp)'
      );
    }
  }
}
