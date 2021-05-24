export interface Position {
  current: boolean;
  title: string;
  company: string;
  dateStart: string;
  dateEnd?: string;
  description: string;
  highlights: { value: string }[];
}
