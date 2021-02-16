import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
 @Input() product: Product;
 @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onBuyProduct(product: Product): void {
    this.buyProduct.emit(product);
  }
}
