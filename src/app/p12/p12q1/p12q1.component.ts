import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-p12q1',
  templateUrl: './p12q1.component.html',
  styleUrl: './p12q1.component.css',
})
export class P12q1Component {
  studentId: number;
  constructor(private studentService: StudentService) {
    this.studentId = 0;
  }
  ngOnInit(): void {
    console.log(this.studentService.getStudents());
    console.log(this.studentService.getStudentById(1));
  }
  displayStudent() {
    console.log(this.studentId);
    console.log(this.studentService.getStudentById(this.studentId));
  }
}
