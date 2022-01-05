import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdCard } from 'src/ID_Name/idcard.entity';
import { IdcardsModule } from 'src/ID_Name/idcards.module';
import { IdcardsService } from 'src/ID_Name/idcards.service';
import { Contest } from './contest.entity';

import { ContestsController } from './contests.controller';
import { ContestsService } from './contests.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contest, IdCard]), IdcardsModule],
  controllers: [ContestsController],
  providers: [ContestsService],
})
export class ContestModule {}
