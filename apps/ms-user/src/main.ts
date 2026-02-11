import { NestFactory } from '@nestjs/core';
import { MsUserModule } from './ms-user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { RABBIT_MQ_QUEUE_USER } from '@app/contracts';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(MsUserModule);
  const configService = appContext.get(ConfigService);
  const url = configService.get<string>(
    'rabbitmq.url',
    'amqp://guest:guest@localhost:5672',
  );

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsUserModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: RABBIT_MQ_QUEUE_USER,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  console.log('🚀 User Microservice is running');

  await app.listen();
}
bootstrap();
