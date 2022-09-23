import { CourseModel } from '../models/course.model';

export const dataset: CourseModel[] = [
  {
    id: 1,
    name: 'Jiu Jitsu',
    description: 'Luta Brasileira',
    students: [
      { id: 1, name: 'Aluno 1' },
      { id: 2, name: 'Aluno 2' },
      { id: 3, name: 'Aluno 3' },
    ],
  },
  {
    id: 2,
    name: 'Karatê',
    description: 'Luta japonesa',
    students: [
      { id: 2, name: 'Aluno 2' },
      { id: 4, name: 'Aluno 4' },
      { id: 5, name: 'Aluno 5' },
      { id: 6, name: 'Aluno 6' },
    ],
  },
  {
    id: 3,
    name: 'Krav Maga',
    description: 'Luta Israelênse',
    students: [
      { id: 7, name: 'Aluno 7' },
      { id: 8, name: 'Aluno 8' },
      { id: 9, name: 'Aluno 9' },
    ],
  },
];
