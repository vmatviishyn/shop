import { Component, DoCheck } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements DoCheck {
  products: Product[];
  cartTotal: number;

  constructor(private cartService: CartService) { }

  ngDoCheck(): void {
    this.products = this.cartService.getProducts();
    this.cartTotal = this.cartService.getCartTotal();
  }

  onRemoveProduct(product: Product): void {
    this.cartService.removeProduct(product);
  }
}
