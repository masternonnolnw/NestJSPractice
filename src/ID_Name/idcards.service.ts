import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import console from 'console';
import { Repository } from 'typeorm';
import { IdCard } from './idcard.entity';

@Injectable()
export class IdcardsService {
  constructor(
    @InjectRepository(IdCard) private IdcardRepo: Repository<IdCard>,
  ) {}
  async getIdcards() {
    return await this.IdcardRepo.find({});
  }
  async insertIdcard(idCard: string, name: string, status: string) {
    if (idCard.length != 13) {
      return (
        'Wrong IdCard number (must be 13 number) \nyour input just ' +
        String(idCard.length)
      );
    }
    const checkId = await this.IdcardRepo.findOne({ idCard });
    if (checkId != null) {
      return 'IdCard alredy exit.';
    }
    const newIdcard = await new IdCard();
    newIdcard.idCard = idCard;
    newIdcard.name = name;
    newIdcard.status = status;
    newIdcard.save();
    return newIdcard;
  }
  async updateIdcards(
    id: number,
    idCard: string,
    name: string,
    status: string,
  ) {
    const getIdcard = await this.IdcardRepo.findByIds([id]);
    const idcard = getIdcard[0];
    if (idCard) {
      idcard.idCard = idCard;
    }
    if (name) {
      idcard.name = name;
    }
    if (status) {
      idcard.status = status;
    }
    idcard.save();
    return idcard;
  }
}
