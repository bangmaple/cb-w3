import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AppService } from '../services/app.service';
import { LoginDto } from '../dtos/login.dto';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  loginWeb3(@Body() payload: LoginDto) {
    return this.appService.loginWeb3(payload);
  }
}
