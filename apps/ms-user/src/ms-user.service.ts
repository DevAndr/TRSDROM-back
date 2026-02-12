import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User as UserTelegram } from '@telegram-apps/init-data-node';
import { parseTelegramInitData } from './utils/parseTelegramInitData';
import { isDefined } from '@app/core';
import { PrismaService } from '@app/prisma';

@Injectable()
export class MsUserService {
  constructor(private readonly prisma: PrismaService) {}

  async authWitchTelegram(data: string) {
    try {
      const parsedData = this.parseAndValidateTelegramData(data);

      const {
        id: telegramId,
        username,
        photo_url,
      } = parsedData.user as UserTelegram;

      if (!telegramId || !username)
        throw new HttpException(
          'Invalid Telegram Data',
          HttpStatus.BAD_REQUEST,
        );

      let user = await this.prisma.user.findUnique({
        where: {
          telegramId,
        },
      });

      const isNewUser = !isDefined(user);

      if (isNewUser) {
        user = await this.prisma.user.create({
          data: {
            username,
            urlPhoto: photo_url || '',
            telegramId,
          },
        });

        // this.gameDataClient.emit(MS_GAME_DATA_PATTERNS.INITIAL, user.uid);
      }

      return { ...user, isNewUser };
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException();
    }
  }

  private parseAndValidateTelegramData(initData: string) {
    const parsedData = parseTelegramInitData(initData);
    this.validateTelegramUser(parsedData.user as UserTelegram);

    return parsedData;
  }

  private validateTelegramUser(user: UserTelegram) {
    if (!user?.id)
      throw new HttpException('Missing Telegram ID', HttpStatus.NOT_FOUND);

    if (!user?.username)
      throw new HttpException('Missing username', HttpStatus.NOT_FOUND);
  }

  getUserById(uid: string) {
    return this.prisma.user.findUnique({
      where: {
        uid,
      },
    });
  }
}
