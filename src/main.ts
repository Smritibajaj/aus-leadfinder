import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
//import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS with specific options
  const allowedOrigin = 'localhost:5173';
  const corsOptions: CorsOptions = {
    origin: new RegExp(
      '^(http|https)://(.+\\.)?' + allowedOrigin + '(:\\d{1,5})?/?$',
      'i',
    ),
  };
  app.enableCors(corsOptions);
  await app.listen(8000);
  //Logger.log(`Listening on http://localhost:${port}`);
}
bootstrap();
