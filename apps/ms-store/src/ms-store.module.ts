import { Module } from '@nestjs/common';
import { MsStoreController } from './ms-store.controller';
import { MsStoreService } from './ms-store.service';
import { ConfigModule } from '@app/core';

@Module({
  imports: [ConfigModule],
  controllers: [MsStoreController],
  providers: [MsStoreService],
})
export class MsStoreModule {}
