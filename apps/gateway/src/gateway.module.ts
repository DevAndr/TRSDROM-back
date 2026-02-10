import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/core';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [ConfigModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
