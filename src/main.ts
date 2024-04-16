import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  await app.listen(8000);
  //Logger.log(`Listening on http://localhost:${port}`);
}
bootstrap();
