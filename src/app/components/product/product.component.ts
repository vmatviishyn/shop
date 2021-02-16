import { Component, Input } from '@angular/core';

import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
 @Input() product: ProductModel;

  constructor(private cartService: CartService) { }

  onBuy(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
