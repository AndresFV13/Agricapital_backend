import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { NutritionalInfo } from './nutritional-info.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  category: string;

  @Column()
  stock: number;

  @Column()
  description: string;

  @Column()
  origin: string;

  @Column('simple-array')
  certifications: string[];

  @Column({ nullable: true })
  harvestDate: Date;

  @Column()
  supplier: string;

  @OneToOne(() => NutritionalInfo, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  nutritionalInfo?: NutritionalInfo;

  @Column()
  imageUrl: string;
}
