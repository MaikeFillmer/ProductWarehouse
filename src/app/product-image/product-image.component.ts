import { Component, OnInit } from '@angular/core';
import { Product } from '../app.model';

@Component({
  selector: 'product-image',
  inputs: ['product'],
  host: {class: 'ui small image'},
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
	product: Product; 
  constructor() { }

  ngOnInit() {
  }

}
