import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-p17q1page2',
  templateUrl: './p17q1page2.component.html',
  styleUrls: ['./p17q1page2.component.css'], // Corrected property name
})
export class P17q1page2Component {
  name: string = '';
  price = 0;
  constructor(
    private route: ActivatedRoute,
    private products: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      if (id) {
        console.log('ID parameter is available');
        this.name = this.products.getProducts(Number.parseInt(id)).name;
        this.price = this.products.getProducts(Number.parseInt(id)).price;
        console.log(this.products.getProducts(Number.parseInt(id)));
      } else {
        console.log('ID parameter is not available');
        // Handle the case where the 'id' parameter is not available
      }
    });
  }
}
