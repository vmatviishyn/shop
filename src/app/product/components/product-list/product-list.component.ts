import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuyProduct(product: Product): void {
    this.cartService.addProduct(product);
  }
}
