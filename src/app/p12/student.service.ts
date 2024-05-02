import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Array<any> = [
    { id: 1, name: 'Parv', age: 17 },
    { id: 2, name: 'Jyot', age: 17 },
    { id: 3, name: 'Kunj', age: 17 },
  ];
  constructor() {}
  getStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    return this.students.find((student) => student.id == id);
  }
}
