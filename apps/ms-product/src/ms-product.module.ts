import { Module } from '@nestjs/common';
import { MsProductController } from './ms-product.controller';
import { MsProductService } from './ms-product.service';
import { ConfigModule } from '@app/core';

@Module({
  imports: [ConfigModule],
  controllers: [MsProductController],
  providers: [MsProductService],
})
export class MsProductModule {}
