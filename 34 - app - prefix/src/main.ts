import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix('v1');
  // app.setGlobalPrefix('v1', {
  //   exclude: [{ path: '/', method: RequestMethod.GET }],
  // });
  // app.setGlobalPrefix('v1', {
  //   exclude: ['/'],
  // });

  await app.listen(3000);
}
bootstrap();