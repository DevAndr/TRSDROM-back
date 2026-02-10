import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors();

  const configService = app.get(ConfigService);
  const port = configService.get<number>('gateway.port', 3030);

  await app.listen(port, () =>
    console.log(`🚀 Getaway is running on port ${port}`),
  );
}
bootstrap();
