import { Module } from '@nestjs/common';
import { MsProductController } from './ms-product.controller';
import { MsProductService } from './ms-product.service';

@Module({
  imports: [],
  controllers: [MsProductController],
  providers: [MsProductService],
})
export class MsProductModule {}
