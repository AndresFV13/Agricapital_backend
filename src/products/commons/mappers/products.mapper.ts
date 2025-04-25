import { Product } from '../../models/product.entity';
import { ProductDto } from '../dtos/exit/product.dto';
import { ProductDtoBuilder } from '../builder/product.dto.builder';

export class ProductsMapper {
  toReadDto(product: Product): ProductDto {
    return new ProductDtoBuilder()
      .setId(product.id)
      .setName(product.name)
      .setPrice(Number(product.price))
      .setCategory(product.category)
      .setStock(product.stock)
      .setDescription(product.description)
      .setOrigin(product.origin)
      .setCertifications(product.certifications)
      .setHarvestDate(product.harvestDate)
      .setSupplier(product.supplier)
      .setNutritionalInfo(
        product.nutritionalInfo
          ? {
              calories: product.nutritionalInfo.calories,
              vitamins: product.nutritionalInfo.vitamins,
            }
          : undefined,
      )
      .setImageUrl(product.imageUrl)
      .build();
  }
}
