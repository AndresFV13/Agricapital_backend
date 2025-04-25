import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto } from '../../commons/dtos/exit/product.dto';
import { ProductsMapper } from '../../commons/mappers/products.mapper';
import { ProductRepository } from '../../repository/impl/ProductRepository';
import { IProductsService } from '../IProductsService';
import { DiscountService } from './discountService';

@Injectable()
export class ProductsService implements IProductsService {
  constructor(
    private discountService: DiscountService,
    private productRepository: ProductRepository,
    private mapper: ProductsMapper,
  ) {}

  async findAllProducts(): Promise<ProductDto[]> {
    const products = await this.productRepository.findAllProducts();
    return products
      .map((product) => this.discountService.applyDiscount(product))
      .map((product) => this.mapper.toReadDto(product));
  }

  async findOneProductById(id: number): Promise<ProductDto> {
    return this.productRepository
      .findOneProductById(id)
      .then((product) => {
        if (!product) {
          throw new NotFoundException(`Product with id ${id} not found`);
        }
        return product;
      })
      .then((product) => this.discountService.applyDiscount(product))
      .then((product) => this.mapper.toReadDto(product));
  }
}
