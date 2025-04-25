import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../services/impl/products.service';
import { ProductDto } from '../commons/dtos/exit/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(200)
  async findAllProducts(): Promise<ProductDto[]> {
    return await this.productsService.findAllProducts();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneProductById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProductDto> {
    return await this.productsService.findOneProductById(id);
  }
}
