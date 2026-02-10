import { NestFactory } from '@nestjs/core';
import { MsStoreModule } from './ms-store.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(MsStoreModule);
  const configService = appContext.get(ConfigService);
  const url = configService.get<string>(
    'rabbitmq.url',
    'amqp://guest:guest@localhost:5672',
  );

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsStoreModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: 'store-queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  console.log('🚀 Store Microservice is running');

  await app.listen();
}
bootstrap();
