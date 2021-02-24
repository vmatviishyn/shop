import { Injectable } from '@angular/core';

import { Category } from '../enums/category.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      name: 'iPhone 12 64GB Black',
      code: '000001',
      description: 'Насичено чорний, надиво функціональний – так можна описати новинку 2020 року Apple iPhone 12. Чому він так заворожує фанатів? На це питання можна відповісти, детально познайомившись з функціональним наповненням та поновленнями, що чекають фанатів техніки по всьому світові.',
      price: 24587,
      category: Category.iPhone,
      isAvailable: true,
      img: 'iPhone.jpg',
      quantity: 1
    },
    {
      name: 'MacBook Pro 13 Space Gray',
      code: '000002',
      description: 'Неймовірно тонкий і легкий MacBook Pro став ще швидше і потужніший. У нього найяскравіший екран і краще перенесення кольорів серед всіх ноутбуків Mac. У деяких моделях у клавіатуру вмонтована виконана зі скла сенсорна панель Touch Bar, яка підтримує жести Multi-Touch і забезпечує швидкий і зручний доступ до тих функцій, які потрібні вам саме зараз. MacBook Pro створений на основі передових ідей. І у нього є все для втілення ваших мрій.',
      price: 99726,
      category: Category.Mac,
      isAvailable: false,
      img: 'Mac.jpg',
      quantity: 1
    },
    {
      name: 'Apple Watch Series 6',
      code: '000003',
      description: 'Найпродвинутіший годинник 2020 року, з потужним функціоналом та стильним дизайном вже чекає на вас у магазинах України. Apple Watch Series 6 стали справжнім хітом, адже це втілення інноваційних розробок всесвітньо відомого бренду для своїх фанатів. Нові можливості, велика кількість додатків для покращення вашого дня та життя в цілому.',
      price: 11492,
      category: Category.AppleWatch,
      isAvailable: true,
      img: 'Watch.jpg',
      quantity: 1
    },
    {
      name: 'AirPods 2',
      code: '000004',
      description: 'Бездротові навушники Apple не стали першою безпровідною гарнітурою. Тим не менше, планка, яку поставила компанія, випустивши Airpods, до сих пір вважається еталоном. Розгляньмо, чому варто купити безпровідні навушники Apple і чим оригінальні Airpods в Apple Room відрізняють від копій, заполонивших український ринок.',
      price: 4074,
      category: Category.AirPods,
      isAvailable: true,
      img: 'AirPods.jpg',
      quantity: 1
    },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
