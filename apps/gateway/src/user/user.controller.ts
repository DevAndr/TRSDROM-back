import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { PayloadLoginTelegramDto } from './types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth-with-telegram')
  authWithTelegram(@Body() data: PayloadLoginTelegramDto) {
    return this.userService.authWithTelegram(data.initData);
  }

  @Post('get-by-id')
  getUserById(@Body('uid') uid: string) {
    console.log(uid);
    return this.userService.getUserById(uid);
  }
}
