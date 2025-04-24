import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<ProductDto[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductDto> {
    return this.productsService.findOne(id);
  }
}