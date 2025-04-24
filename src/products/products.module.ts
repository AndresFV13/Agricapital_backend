import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutritionalInfo } from './entities/nutritional-info.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, NutritionalInfo])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}