export interface Credit {
  Lecture: number;
  Tutorial: number;
  Practical: number;
  Project: number;
}

export interface Co {
  title: string;
  evaluation: string;
  percentage: number;
  description: string;
}

export interface Progress {
  complete: number;
  pending: number;
  total: number;
}

export interface EvaluationReport {
  totalStudent: {
    middle: number;
    good: number;
    excellent: number;
  };
  mark: number;
  progress: {
    assessment: Progress;
    quiz: Progress;
    presentation: Progress;
    lab: Progress;
    viva: Progress;
  };
  attendance: any;
}

export interface CourseDetails {
  courseName: string;
  courseCode: string;
  type: string;
  sem: string;
  map: string;
  credit: Credit;
  co: Co[];
  evaluationReport: EvaluationReport[];
}

export interface poutCome {
  title: string;
  poTitle: string;
  description: string;
  percentage: number;
  evaluation: string;
  mapped: string;
  courseDetails: CourseDetails[];
}

export interface Programoutcomrs {
  programcode: string;
  coursecode: coursecode[];
 
}
 
export interface coursecode {
  title: string;
  subtitle: string;
  description: string;
}

export interface ExanValues {
  poutcome: poutCome[];

}
export interface CourseProgress {
  complete: number;
  inprogress: number;
  yetToStart: number;
}

export interface TableData {
  poseries: string;
  programoutcome: string;
  programattanment: string;
  evaluation: string;
  courseProgress: CourseProgress[];
}

export interface Batch {
  batch: string;
  programattanment: string;
  evaluation: string;
  courseProgress: CourseProgress[];
  tabledata: TableData[];
}

export interface Course {
  code: string;
  name: string;
  description: string;
  image: string;
  batch: Batch[];
}
