import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-p14q1',
  templateUrl: './p14q1.component.html',
  styleUrl: './p14q1.component.css',
})
export class P14q1Component implements OnInit {
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  items$: Observable<string[]> = of(this.items);
  filteredItems: string[] | undefined;

  ngOnInit() {
    this.items$.subscribe((items) => {
      this.filteredItems = items;
    });
  }

  onSearch(query: string) {
    this.filteredItems = this.items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onSearch(target.value);
  }
}
