export interface CourseModel {
  id: number;
  name: string;
  description: string;
  students: Student[];
}

interface Student {
  id: number;
  name: string;
}
