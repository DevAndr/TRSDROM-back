import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { MS_USER_NAME, MS_USER_PATTERNS } from '@app/contracts';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject(MS_USER_NAME) private readonly authClient: ClientProxy) {}

  authWithTelegram(initData: string) {
    return firstValueFrom(
      this.authClient.send(MS_USER_PATTERNS.AUTH_WITH_TELEGRAM, initData),
    );
  }
}
