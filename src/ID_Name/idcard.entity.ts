import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IdCard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idCard: string;

  @Column()
  name: string;

  @Column()
  status: string;
}
