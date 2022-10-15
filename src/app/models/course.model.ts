export interface CourseModel {
  id: number;
  title: string;
  description?: string;
  price: number;
  students_count: number;
}

interface Student {
  id: number;
  name: string;
}
