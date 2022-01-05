import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import console from 'console';
import { IdCard } from 'src/ID_Name/idcard.entity';
import { Repository } from 'typeorm';
import { Contest } from './contest.entity';

@Injectable()
export class ContestsService {
  constructor(
    @InjectRepository(Contest) private ContestRepo: Repository<Contest>,

    @InjectRepository(IdCard) private IdcardRepo: Repository<IdCard>,
  ) {}
  async getContest() {
    return await this.ContestRepo.find({});
  }
  async insertContest(
    idCard: string,
    round: number,
    score1: number,
    score2: number,
  ) {
    const player = await this.IdcardRepo.findOne({ idCard });
    const id = player.id;
    const newContest = await new Contest();
    newContest.playerId = id;
    newContest.round = round;
    newContest.score1 = score1;
    newContest.score2 = score2;
    newContest.save();
    return newContest;
  }
  // async updateIdcards(
  //   id: number,
  //   idCard: string,
  //   name: string,
  //   status: string,
  // ) {
  //   const getIdcard = await this.IdcardRepo.findByIds([id]);
  //   const idcard = getIdcard[0];
  //   if (idCard) {
  //     idcard.idCard = idCard;
  //   }
  //   if (name) {
  //     idcard.name = name;
  //   }
  //   if (status) {
  //     idcard.status = status;
  //   }
  //   idcard.save();
  //   return idcard;
  // }
}
