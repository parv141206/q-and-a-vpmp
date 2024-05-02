import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-p17q1',
  templateUrl: './p17q1.component.html',
  styleUrl: './p17q1.component.css',
})
export class P17q1Component {
  products: Array<any> = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    console.log(this.products);
  }
}
