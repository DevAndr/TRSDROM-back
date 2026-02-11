import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/core';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
