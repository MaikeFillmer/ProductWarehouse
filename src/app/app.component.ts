import { Component } from '@angular/core';
import { Product } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
  	this.products = [
  	new Product(
  		'MYSHOES',
  		'Black running Shoes',
  		'/resources/images/products/black-shoes.jpg',
  		['Men', 'Shoes', 'Running Shoes'],
  		109.99),
  	new Product(
  		'NEATOJACKET',
  		'Blue Jacket',
  		'/resources/images/products/blue-jacket.jpg',
  		['Women', 'Apparel', 'Jackets & Vests'],
  		238.99),
  	new Product(
  		'POLKABIKINI',
  		'Yellow Polka Dot Bikini',
  		'/resources/images/products/blikini.jpg',
  		['Women', 'Apparel', 'Swimwear'],
  		28.99)
  	];
  }

  productWasSelected(product: Product): void {
  	console.log('Product Clicked: ', product);
  }
}
