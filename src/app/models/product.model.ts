import { Category } from '../enums/category.enum';

export interface Product {
    name: string;
    code: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    img: string;
    quantity: number;
}
