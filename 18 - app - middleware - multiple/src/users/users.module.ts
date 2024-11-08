import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersMiddleware } from './users.middleware';
import { AnotherMiddleware } from './another.middleware';

@Module({
  controllers: [UsersController]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // 1st Middleware
      .apply(UsersMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
      //{ path: 'users/:id', method: RequestMethod.GET }
      )
      // 2nd Middleware
      .apply(AnotherMiddleware)
      .forRoutes(
      //{ path: 'users', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.GET }
      );
  }
}