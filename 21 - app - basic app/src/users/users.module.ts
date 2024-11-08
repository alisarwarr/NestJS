import { Module, Controller, Injectable, ParseIntPipe, Param, Post, Body, ValidationPipe, NestModule, MiddlewareConsumer, NestMiddleware, CanActivate, ExecutionContext, Get, UseGuards } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
import { NextFunction } from 'express';
import { Observable } from 'rxjs';


// DTO
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}


// SERVICE
@Injectable()
export class UsersService {
  @Get()
  helloWorld() {
    return "Hello World";
  }

  @Post(':id')
  helloWorldById(id: number, content: CreateUserDto) {
    return "Hello World " + id + " " + JSON.stringify(content);
  }
}


// GUARD
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers);
    return true;
  }
}


// CONTROLLER
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  helloWorld() {
    return this.usersService.helloWorld();
  }

  @Post(':id')
  helloWorldById(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) content: CreateUserDto) {
    return this.usersService.helloWorldById(id, content);
  }
}


// MIDDLEWARE
@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Users Middleware");
    next();
  }
}


// MODULE
@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes(UsersController);
  }
}