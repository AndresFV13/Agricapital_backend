import { NutritionalInfoDto } from './nutritional-info.dto';

export class ProductDto {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  origin: string;
  certifications: string[];
  harvestDate: Date;
  supplier: string;
  nutritionalInfo?: NutritionalInfoDto;
  imageUrl: string;
}
