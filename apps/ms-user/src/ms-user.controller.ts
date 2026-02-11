import { Controller } from '@nestjs/common';
import { MsUserService } from './ms-user.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { MS_USER_PATTERNS } from '@app/contracts';

@Controller()
export class MsUserController {
  constructor(private readonly userService: MsUserService) {}

  @MessagePattern(MS_USER_PATTERNS.AUTH_WITH_TELEGRAM)
  handleAuthWithTelegram(@Payload() data: string, @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`, data);
    return this.userService.authWitchTelegram(data);
  }
}
