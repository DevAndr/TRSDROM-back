import { Module } from '@nestjs/common';
import { MsStoreController } from './ms-store.controller';
import { MsStoreService } from './ms-store.service';
import { ConfigModule } from '@app/core';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [ConfigModule, PrismaModule],
  controllers: [MsStoreController],
  providers: [MsStoreService],
})
export class MsStoreModule {}
