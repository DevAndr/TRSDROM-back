import { NestFactory } from '@nestjs/core';
import { MsProductModule } from './ms-product.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RABBIT_MQ_QUEUE_PRODUCT } from '@app/contracts';

async function bootstrap() {
  const appContext =
    await NestFactory.createApplicationContext(MsProductModule);
  const configService = appContext.get(ConfigService);
  const url = configService.get<string>(
    'rabbitmq.url',
    'amqp://guest:guest@localhost:5672',
  );

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsProductModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: RABBIT_MQ_QUEUE_PRODUCT,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  console.log('🚀 Product Microservice is running');

  await app.listen();
}
bootstrap();
