import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<ProductDto[]> {
    const products = await this.productRepository.find();
    return products.map(product => this.toReadDto(product));
  }

  async findOne(id: number): Promise<ProductDto> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.toReadDto(product);
  }

  private toReadDto(product: Product): ProductDto {
    const { id, name, price, category, stock, description, origin, certifications, harvestDate, supplier, nutritionalInfo } = product;
    return {
      id,
      name,
      price: Number(price),
      category,
      stock,
      description,
      origin,
      certifications,
      harvestDate,
      supplier,
      nutritionalInfo: nutritionalInfo
        ? { calories: nutritionalInfo.calories, vitamins: nutritionalInfo.vitamins }
        : undefined,
    };
  }
}