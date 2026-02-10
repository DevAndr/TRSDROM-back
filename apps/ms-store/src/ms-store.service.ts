import { Injectable } from '@nestjs/common';

@Injectable()
export class MsStoreService {
  getHello(): string {
    return 'Hello World!';
  }
}
