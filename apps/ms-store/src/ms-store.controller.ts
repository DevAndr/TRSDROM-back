import { Controller } from '@nestjs/common';
import { MsStoreService } from './ms-store.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { MS_STORE_PATTERNS } from '@app/contracts';

@Controller()
export class MsStoreController {
  constructor(private readonly storeService: MsStoreService) {}

  @MessagePattern(MS_STORE_PATTERNS.GET_STORES)
  handleAuthWithTelegram() {
    return this.storeService.getStores();
  }
}
