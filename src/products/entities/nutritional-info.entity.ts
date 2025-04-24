import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NutritionalInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calories: number;

  @Column('simple-array')
  vitamins: string[];
}
