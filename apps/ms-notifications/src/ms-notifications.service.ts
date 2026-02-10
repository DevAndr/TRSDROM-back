import { Injectable } from '@nestjs/common';

@Injectable()
export class MsNotificationsService {
  getHello(): string {
    return 'Hello World!';
  }
}
