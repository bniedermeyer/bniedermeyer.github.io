import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundComponent } from './background/background.component';
import { BackgroundSectionComponent } from './background/background-section/background-section.component';
import { WorkExperienceComponent } from './background/work-experience/work-experience.component';
import { SkillsComponent } from './background/skills/skills.component';
import { EducationComponent } from './background/education/education.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../material.module';
import { CommunityComponent } from './background/community/community.component';
import { ProjectsComponent } from './background/projects/projects.component';
import { AwardsComponent } from './background/awards/awards.component';
import { JobComponent } from './background/job/job.component';
import { SkillComponent } from './background/skills/skill/skill.component';
import { DegreeComponent } from './background/education/degree/degree.component';
import { ListPillComponent } from './list-pill/list-pill.component';
import { ProjectComponent } from './background/projects/project/project.component';
import { AwardComponent } from './background/awards/award/award.component';

@NgModule({
  declarations: [
    BackgroundComponent,
    NavComponent,
    WorkExperienceComponent,
    InfoCardComponent,
    SkillsComponent,
    BackgroundSectionComponent,
    EducationComponent,
    CommunityComponent,
    ProjectsComponent,
    AwardsComponent,
    JobComponent,
    SkillComponent,
    DegreeComponent,
    ListPillComponent,
    ProjectComponent,
    AwardComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, NavComponent],
})
export class ComponentsModule {}
