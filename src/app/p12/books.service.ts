import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<any> = [
    { id: 1, name: 'Book 1', author: 'Author 1' },
    { id: 2, name: 'Book 2', author: 'Author 2' },
    { id: 3, name: 'Book 3', author: 'Author 3' },
  ];
  constructor() {}

  getBooks() {
    return this.books;
  }
  getBookById(id: number) {
    return this.books.find((book) => book.id == id);
  }
}
