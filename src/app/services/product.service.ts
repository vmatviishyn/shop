import { Injectable } from '@angular/core';

import { Category } from '../enums/category.enum';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductModel[] = [
    {
      name: 'JavaScript для детей. Морган Ник',
      description: '«JavaScript для детей» - веселый пособие, вступление к основам программирования, с которым вы шаг за шагом овладеете работу со строками, массивами и циклами, инструментами DOM и jQuery и элементом canvas для рисования графики. ',
      price: 280,
      category: Category.Books,
      isAvailable: true
    },
    {
      name: 'Велосипед Crossride Nitro 26" 17.5" 2020 Чорний',
      description: 'Цей велосипед — гідний вибір для вимогливого й амбітного райдера. Сталева рама майже не робить жодного навантаження на велосипед і забезпечує комфортне, надзвичайно легке керування.',
      price: 4694,
      category: Category.Sport,
      isAvailable: true
    },
    {
      name: 'Ноутбук Dell XPS 9500',
      description: 'Стандартная клавиатура с подсветкой поможет эффективно работать даже при низком освещении или в полной темноте, Выделенный графический адаптер nVidia GeForce оснащен собственной видеопамятью, независимой от процессора.',
      price: 139899,
      category: Category.Electronics,
      isAvailable: true
    }
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
