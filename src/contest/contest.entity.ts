import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playerId: number;

  @Column()
  round: number;

  @Column()
  score1: number;

  @Column()
  score2: number;
}
