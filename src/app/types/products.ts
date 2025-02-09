

export interface Products {
    category: string;
    _id: string;
    _type : "products";
    name: string;
    price: number;
    quantity: number;
    description: string;
    image? :string;
    slugCurrent: any;
    discountPercent: number;
}
