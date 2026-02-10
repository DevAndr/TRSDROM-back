import { Controller, Get } from '@nestjs/common';
import { MsProductService } from './ms-product.service';

@Controller()
export class MsProductController {
  constructor(private readonly msProductService: MsProductService) {}

  @Get()
  getHello(): string {
    return this.msProductService.getHello();
  }
}
