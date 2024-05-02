import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p18q1',
  templateUrl: './p18q1.component.html',
  styleUrl: './p18q1.component.css',
})
export class P18q1Component {
  students: Array<any> = [];
  constructor(private studentsService: StudentsService) {}
  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
    console.log(this.students);
  }
}
