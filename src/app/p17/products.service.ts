import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
    },
    {
      id: 2,
      name: 'Mobile',
      price: 20000,
    },
    {
      id: 3,
      name: 'TV',
      price: 10000,
    },
  ];
  constructor() {}
  getProducts(id: number) {
    return this.products.find((product) => product.id == id);
  }
  getAllProducts() {
    return this.products;
  }
}
