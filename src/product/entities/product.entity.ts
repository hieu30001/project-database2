import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  Name: string;

  @Column({ type: 'int' })
  Price: number;

  @Column({ type: 'varchar', length: 30 })
  Gmail: string;
}
