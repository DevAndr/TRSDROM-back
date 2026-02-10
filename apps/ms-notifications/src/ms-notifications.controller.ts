import { Controller, Get } from '@nestjs/common';
import { MsNotificationsService } from './ms-notifications.service';

@Controller()
export class MsNotificationsController {
  constructor(private readonly notificationsService: MsNotificationsService) {}

  @Get()
  getHello(): string {
    return this.notificationsService.getHello();
  }
}
