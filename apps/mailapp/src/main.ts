import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MailappModule } from './mailapp.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
    },
});
  await app.listen();
}
bootstrap();