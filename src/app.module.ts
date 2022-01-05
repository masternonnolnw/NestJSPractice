import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContestModule } from './contest/contests.module';
import { IdcardsModule } from './ID_Name/idcards.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '4913',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IdcardsModule,
    ContestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
