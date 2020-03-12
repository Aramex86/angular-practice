import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  title = 'Products';
  constructor(  productService: ProductService) { 
    this.products = productService.getProducts()
  }

  ngOnInit(): void {

  }

}
