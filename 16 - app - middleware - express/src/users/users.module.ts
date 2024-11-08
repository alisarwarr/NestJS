import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersMiddleware } from './users.middleware';

@Module({
  controllers: [UsersController]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
    //.forRoutes('users');
    //.forRoutes(UsersController);
    //.forRoutes({ path: 'users', method: RequestMethod.GET });
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.GET }
      );

     consumer
      .apply(UsersMiddleware)
      .exclude(
    //  { path: 'users', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.GET }
      )
      .forRoutes(UsersController);
  }
}