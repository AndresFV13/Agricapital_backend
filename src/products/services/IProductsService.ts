import { ProductDto } from '../commons/dtos/exit/product.dto';

export interface IProductsService {
  findAllProducts(): Promise<ProductDto[]>;
  findOneProductById(id: number): Promise<ProductDto>;
}
