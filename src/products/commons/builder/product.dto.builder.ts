import { ProductDto } from '../dtos/exit/product.dto';

export class ProductDtoBuilder {
  private productDto: Partial<ProductDto> = {};

  setId(id: number): ProductDtoBuilder {
    this.productDto.id = id;
    return this;
  }

  setName(name: string): ProductDtoBuilder {
    this.productDto.name = name;
    return this;
  }

  setPrice(price: number): ProductDtoBuilder {
    this.productDto.price = price;
    return this;
  }

  setCategory(category: string): ProductDtoBuilder {
    this.productDto.category = category;
    return this;
  }

  setStock(stock: number): ProductDtoBuilder {
    this.productDto.stock = stock;
    return this;
  }

  setDescription(description: string): ProductDtoBuilder {
    this.productDto.description = description;
    return this;
  }

  setOrigin(origin: string): ProductDtoBuilder {
    this.productDto.origin = origin;
    return this;
  }

  setCertifications(certifications: string[]): ProductDtoBuilder {
    this.productDto.certifications = certifications;
    return this;
  }

  setHarvestDate(harvestDate: Date): ProductDtoBuilder {
    this.productDto.harvestDate = harvestDate;
    return this;
  }

  setSupplier(supplier: string): ProductDtoBuilder {
    this.productDto.supplier = supplier;
    return this;
  }

  setNutritionalInfo(
    nutritionalInfo: { calories: number; vitamins: string[] } | undefined,
  ): ProductDtoBuilder {
    this.productDto.nutritionalInfo = nutritionalInfo;
    return this;
  }

  setImageUrl(imageUrl: string): ProductDtoBuilder {
    this.productDto.imageUrl = imageUrl;
    return this;
  }

  build(): ProductDto {
    return this.productDto as ProductDto;
  }


}
