import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-p18q1page2',
  templateUrl: './p18q1page2.component.html',
  styleUrl: './p18q1page2.component.css',
})
export class P18q1page2Component {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let user = this.studentsService.getStudentById(Number.parseInt(id!));
    this.user = user!;
    console.log(user);
  }
}
