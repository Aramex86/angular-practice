import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data;
  constructor() {}
  ngOnInit(): void {
  }

}
