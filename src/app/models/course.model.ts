export interface CourseModel {
  id: number;
  name: string;
  description: string;
  students: Student[];
  price: number;
}

interface Student {
  id: number;
  name: string;
}
