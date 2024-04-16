import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Add OPTIONS method
    allowedHeaders: ['Content-Type', 'Authorization'], // Add headers you need
    credentials: true, // Allow sending cookies
  });
  await app.listen(8000);
  //Logger.log(`Listening on http://localhost:${port}`);
}
bootstrap();
