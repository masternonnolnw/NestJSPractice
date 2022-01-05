import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdCard } from './idcard.entity';

import { IdcardsController } from './idcards.controller';
import { IdcardsService } from './idcards.service';

@Module({
  imports: [TypeOrmModule.forFeature([IdCard])],
  controllers: [IdcardsController],
  providers: [IdcardsService],
  exports: [IdcardsService],
})
export class IdcardsModule {}
