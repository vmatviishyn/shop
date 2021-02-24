export enum Category {
    iPhone = 'iPhone',
    Mac = 'Mac',
    AppleWatch = 'AppleWatch',
    AirPods = 'AirPods'
}

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
