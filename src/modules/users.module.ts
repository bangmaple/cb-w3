import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { accountProviders } from '../providers/account.provider';
import { UsersService } from '../services/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...accountProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
