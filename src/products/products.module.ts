import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutritionalInfo } from './models/nutritional-info.entity';
import { ProductsService } from './services/impl/products.service';
import { ProductsController } from './controllers/products.controller';
import { Product } from './models/product.entity';
import { ProductRepository } from './repository/impl/ProductRepository';
import { ProductsMapper } from './commons/mappers/products.mapper';
import { DiscountService } from './services/impl/discountService';

@Module({
  imports: [TypeOrmModule.forFeature([Product, NutritionalInfo])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    DiscountService,
    ProductRepository,
    ProductsMapper,
  ],
})
export class ProductsModule {}
