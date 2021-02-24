import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
 @Input() product: Product;
 @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onBuyProduct(product: Product, qty: number): void {
    product.quantity = +qty;
    this.buyProduct.emit(product);
  }
}
