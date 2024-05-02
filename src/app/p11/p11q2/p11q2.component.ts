import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p11q2',
  templateUrl: './p11q2.component.html',
  styleUrls: ['./p11q2.component.css'],
})
export class P11q2Component implements OnInit {
  radius: number = 0;
  area: number = 0;
  constructor() {}

  ngOnInit() {
    console.log('Init');
    this.radius = 10;
    this.area = Math.PI * this.radius * this.radius;
  }
}
