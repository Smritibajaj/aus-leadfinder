import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:5173/'],
    credentials: true,
  });
  await app.listen(8000);
  //Logger.log(`Listening on http://localhost:${port}`);
}
bootstrap();
