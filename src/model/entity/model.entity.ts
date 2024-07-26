import { Item } from 'src/interfaces/item';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
export class ModelEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('simple-json')
  item: Item[];
}
