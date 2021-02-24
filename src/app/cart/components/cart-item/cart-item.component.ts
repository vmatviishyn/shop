import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product: Product;
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter();

   constructor() { }

   onCartItemRemove(event: MouseEvent) {
     event.stopPropagation();
     this.removeProduct.emit(this.product);
   }
}
