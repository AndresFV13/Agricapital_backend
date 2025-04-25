import { Injectable } from '@nestjs/common';
import { Product } from '../../models/product.entity';
import { idiscountService } from '../idiscountService';

@Injectable()
export class DiscountService implements idiscountService {
  /**
   * Aplica un descuento del 20% a los productos que tienen más de un mes desde su fecha de cosecha.
   * @param product El producto al que se le aplicará el descuento.
   * @returns El producto con el precio actualizado.
   */
  applyDiscount(product: Product): Product {
    const today = new Date();
    const harvestDate = new Date(product.harvestDate);
    const diffInMonths =
      (today.getFullYear() - harvestDate.getFullYear()) * 12 +
      (today.getMonth() - harvestDate.getMonth());

    if (diffInMonths > 1) {
      product.price = product.price * 0.8;
    }

    return product;
  }
}
