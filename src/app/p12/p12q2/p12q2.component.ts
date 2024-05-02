import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-p12q2',
  templateUrl: './p12q2.component.html',
  styleUrl: './p12q2.component.css',
})
export class P12q2Component {
  bookId: number;
  constructor(private booksService: BooksService) {
    this.bookId = 0;
  }
  ngOnInit(): void {
    console.log(this.booksService.getBooks());
    console.log(this.booksService.getBookById(1));
  }
  displayBook() {
    console.log(this.bookId);
    console.log(this.booksService.getBookById(this.bookId));
  }
}
