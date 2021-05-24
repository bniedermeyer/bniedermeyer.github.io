import { Award } from './award';
import { Education } from './education';
import { Position } from './position';
import { Skill } from './skill';

export interface Resume {
  positions: Position[];
  skills: Skill[];
  education: Education[];
  community: Position[];
  awards: Award[];
  image: { filename: string };
}
