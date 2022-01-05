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

import { IdcardsService } from './idcards.service';

@Controller('idcards')
export class IdcardsController {
  constructor(private readonly idcardsService: IdcardsService) {}
  @Get()
  async getAllPlayers() {
    const data = await this.idcardsService.getIdcards();
    return data;
  }

  @Post()
  async addPlayer(
    @Body('idCard') prodIdCard: string,
    @Body('name') prodName: string,
  ) {
    const data = await this.idcardsService.insertIdcard(
      prodIdCard,
      prodName,
      'blank',
    );
    return data;
  }

  // @Get(':id')
  // async getWord(@Param('id') prodId: string) {
  //   const data = await this.wordsService.getSingleWord(prodId);
  //   return data;
  // }

  @Patch(':id')
  async updatePlayer(
    @Param('id') prodId: number,
    @Body('idCard') prodIdCard: string,
    @Body('name') prodName: string,
    @Body('status') prodStatus: string,
  ) {
    const data = await this.idcardsService.updateIdcards(
      prodId,
      prodIdCard,
      prodName,
      prodStatus,
    );
    return data;
  }
}
