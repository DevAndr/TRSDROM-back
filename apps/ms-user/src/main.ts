import { NestFactory } from '@nestjs/core';
import { MsUserModule } from './ms-user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { RABBIT_MQ_QUEUE_USER } from '@app/contracts';
import { configRabbitMq } from '@app/core/rabbimqt/config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(MsUserModule);
  const configService = appContext.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsUserModule,
    configRabbitMq(RABBIT_MQ_QUEUE_USER, configService, true, true),
  );

  console.log('🚀 User Microservice is running');

  await app.listen();
}
bootstrap();
