import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-p16q1',
  templateUrl: './p16q1.component.html',
  styleUrl: './p16q1.component.css',
})
export class P16q1Component {
  name: string = '';
  price: number = 0;
  salary: number = 0;
  roll = 0;
  constructor(private http: HttpClient) {}
  insert() {
    let url = 'http://localhost:5000/fur';
    this.http.post(url, { name: this.name, price: this.price }).subscribe();
  }
  insertEmp() {
    let url = 'http://localhost:5000/emp';
    this.http.post(url, { name: this.name, salary: this.salary }).subscribe();
  }
  insertStud() {
    let url = 'http://localhost:5000/stud';
    this.http.post(url, { name: this.name, roll: this.roll }).subscribe();
  }
}
