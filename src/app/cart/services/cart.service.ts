import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  addProduct(product: Product): void {
    let foundProduct = this.products.find(pr => pr.code === product.code);

    if (foundProduct) {
      foundProduct.quantity += product.quantity;
    } else {
      this.products.push({ ...product });
    }
  }

  removeProduct(productToRemove: Product): void {
    this.products = this.products
      .filter((product: Product) => product.code !== productToRemove.code);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCartTotal(): number {
    if (this.products.length) {
      return this.products.map(product => {
        return product.quantity * product.price;
      }).reduce((prev: number, next: number) => {
        return prev + next;
      });
    }
  }
}
