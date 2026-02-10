import { Controller, Get } from '@nestjs/common';
import { MsStoreService } from './ms-store.service';

@Controller()
export class MsStoreController {
  constructor(private readonly storeService: MsStoreService) {}

  @Get()
  getHello(): string {
    return this.storeService.getHello();
  }
}
