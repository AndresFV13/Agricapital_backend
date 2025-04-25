import { Product } from '../models/product.entity';

export interface IproductRepository {
  findAllProducts(): Promise<Product[]>;
  findOneProductById(id: number): Promise<Product | null>;
}
