import { Module } from '@nestjs/common';
import { MsNotificationsController } from './ms-notifications.controller';
import { MsNotificationsService } from './ms-notifications.service';
import { ConfigModule } from '@app/core';

@Module({
  imports: [ConfigModule],
  controllers: [MsNotificationsController],
  providers: [MsNotificationsService],
})
export class MsNotificationsModule {}
