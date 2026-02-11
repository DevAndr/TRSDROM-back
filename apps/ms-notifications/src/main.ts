import { NestFactory } from '@nestjs/core';
import { MsNotificationsModule } from './ms-notifications.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RABBIT_MQ_QUEUE_NOTIFICATIONS } from '@app/contracts';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(
    MsNotificationsModule,
  );
  const configService = appContext.get(ConfigService);
  const url = configService.get<string>(
    'rabbitmq.url',
    'amqp://guest:guest@localhost:5672',
  );

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsNotificationsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: RABBIT_MQ_QUEUE_NOTIFICATIONS,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  console.log('🚀 Notifications Microservice is running');

  await app.listen();
}
bootstrap();
