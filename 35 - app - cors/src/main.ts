import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // const configService = app.get(ConfigService);
  // const whitelist = configService.get<string>('FRONDEND_URL')
  //   ? configService.get<string>('FRONDEND_URL').split(',')
  //   : [];
  // const corsOptions = {
  //   origin: function (origin: string | undefined, callback: Function) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true);
  //     }
  //     else {
  //       callback(new Error("Not allowed by CORS"));
  //     }
  //   }
  // };
  // const corsOptions = {
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  //   allowedHeaders: 'Content-Type, Authorization',
  //   credentials: true
  // };
  // app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();