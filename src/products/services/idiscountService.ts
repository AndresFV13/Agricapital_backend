import { Product } from '../models/product.entity';

export interface idiscountService {
  applyDiscount(product: Product): Product;
}
