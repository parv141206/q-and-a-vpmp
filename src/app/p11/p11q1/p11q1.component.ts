import { Component } from '@angular/core';

@Component({
  selector: 'app-p11q1',
  templateUrl: './p11q1.component.html',
  styleUrl: './p11q1.component.css',
})
export class P11q1Component {
  constructor() {}
  ngOnInit(): void {
    console.log('Init');
  }
  ngOnChanges(): void {
    console.log('onChange');
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}
