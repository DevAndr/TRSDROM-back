import { Controller, Get } from '@nestjs/common';
import { MsUserService } from './ms-user.service';

@Controller()
export class MsUserController {
  constructor(private readonly userService: MsUserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
