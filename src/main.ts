import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS with specific options
  app.enableCors({
    // true for all origins
    origin: 'https://aus-leadfinder-fe.vercel.app/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, //access-control-allow-credentials:true,
    preflightContinue: false,
  });
  await app.listen(8000);
  //Logger.log(`Listening on http://localhost:${port}`);
}
bootstrap();
