import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students = [
    {
      roll: 1,
      name: 'Parv',
      age: 17,
    },
    {
      roll: 2,
      name: 'Rohit',
      age: 18,
    },
    {
      roll: 3,
      name: 'Jyot',
      age: 18,
    },
  ];
  constructor() {}
  getStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    return this.students.find((student) => student.roll == id);
  }
}
