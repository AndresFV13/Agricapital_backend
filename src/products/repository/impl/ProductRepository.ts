import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IproductRepository } from '../iproduct.repository';
import { Product } from '../../models/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository implements IproductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.repo.find();
  }

  async findOneProductById(id: number): Promise<Product | null> {
    return await this.repo.findOne({ where: { id } });
  }
}
