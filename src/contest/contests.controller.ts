import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Res,
} from '@nestjs/common';
import { IdcardsService } from 'src/ID_Name/idcards.service';

import { ContestsService } from './contests.service';

@Controller('contests')
export class ContestsController {
  constructor(
    private readonly contestsService: ContestsService,
    private readonly idCardService: IdcardsService,
  ) {}
  @Get()
  async getAllContests() {
    // return this.idCardService.getIdcards();
    const data = await this.contestsService.getContest();
    return data;
  }

  @Post()
  async addContest(
    @Body('idCard') prodIdCard: string,
    @Body('round') prodRound: number,
    @Body('score1') prodScore1: number,
    @Body('score2') prodScore2: number,
  ) {
    const data = await this.contestsService.insertContest(
      prodIdCard,
      prodRound,
      prodScore1,
      prodScore2,
    );
    return data;
  }

  // @Get(':id')
  // async getWord(@Param('id') prodId: string) {
  //   const data = await this.wordsService.getSingleWord(prodId);
  //   return data;
  // }

  // @Patch(':id')
  // async updateIdcards(
  //   @Param('id') prodId: number,
  //   @Body('idCard') prodIdCard: string,
  //   @Body('name') prodName: string,
  //   @Body('status') prodStatus: string,
  // ) {
  //   const data = await this.contestsService.updateIdcards(
  //     prodId,
  //     prodIdCard,
  //     prodName,
  //     prodStatus,
  //   );
  //   return data;
  // }
}
