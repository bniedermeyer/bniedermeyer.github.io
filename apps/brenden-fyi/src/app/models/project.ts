export interface Project {
  name: string;
  inProgress: boolean;
  url: string;
  description: string;
  technologiesUsed?: { value: string }[];
}
