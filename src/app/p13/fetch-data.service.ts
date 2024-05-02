import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private url = 'http://localhost:5000/';
  constructor(private http: HttpClient) {}
  getData() {
    console.log('Fetching ');
    return this.http.get(this.url);
  }
}
