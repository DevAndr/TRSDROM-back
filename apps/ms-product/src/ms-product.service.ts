import { Injectable } from '@nestjs/common';

@Injectable()
export class MsProductService {
  getHello(): string {
    return 'Hello World!';
  }
}
