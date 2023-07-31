import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from '../dtos/login.dto';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';
import { LoginResponseDto } from '../dtos/login.response.dto';
import { bufferToHex } from 'ethereumjs-util';
import { recoverPersonalSignature } from 'eth-sig-util';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly repository: Repository<UsersEntity>,
    private readonly jwtService: JwtService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async loginWeb3(payload: LoginDto) {
    const user = {} as LoginResponseDto;
    const entity = await this.repository.findOne({
      where: {
        publicAddress: payload.publicAddress,
      },
    });

    if (!entity) {
      user.nonce = String(Math.floor(Math.random() * 10000));
      return 1;
    }
    const msg = `nonce: ${entity.nonce}`;
    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const address = recoverPersonalSignature({
      data: msgBufferHex,
      sig: payload.signature,
    });
    console.log('address', address);

    if (address.toLowerCase() === payload.publicAddress.toLowerCase()) {
      const token = await this.jwtService.signAsync({
        id: 'asas',
        publicAddress: payload.publicAddress,
      });
      return token;
    }
    throw new UnauthorizedException();
  }
}
