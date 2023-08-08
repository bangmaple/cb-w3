import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AccountEntity } from '../entities/account.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private readonly repository: Repository<AccountEntity>,
  ) {}

  async findByPublicAddress(publicAddress: string): Promise<AccountEntity> {
    return await this.repository.findOne({
      where: {
        publicAddress: publicAddress,
      },
    });
  }
}
