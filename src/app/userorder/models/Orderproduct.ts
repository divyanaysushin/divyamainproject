export class OrderProduct {
  user_id?: number;
  product_id?: number;
  username?: string;
  mail?: string;
  productName?: string;
  discription?: string;
  productImage?: string;
  quantity?: number;
  total_price?: number;
}

export class OrderDelete {
  user_id?: number;
  order_id?:number;
  product_id?: number;
  username?: string;
  mail?: string;
  productName?: string;
  discription?: string;
  productImage?: string;
  quantity?: number;
  total_price?: number;
}