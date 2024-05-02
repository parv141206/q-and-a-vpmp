import { Component } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-p13q1',
  templateUrl: './p13q1.component.html',
  styleUrls: ['./p13q1.component.css'],
})
export class P13q1Component {
  data: any;

  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.fetchData.getData().subscribe((response) => {
      let temp = response;
      this.data = JSON.parse(JSON.stringify(temp)).message;
      console.log(this.data);
    });
  }
}
