import { Module, Controller, Injectable, Post, Body, ValidationPipe, NestModule, MiddlewareConsumer, NestMiddleware, CanActivate, ExecutionContext, Get, UseGuards } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { NextFunction } from 'express';
import { Observable } from 'rxjs';
import { InjectModel, MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model } from 'mongoose';


// SCHEMA
@Schema()
export class Users {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: false })
  age?: number;

  @Prop({ required: false })
  address?: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);


// DTO
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNumber()
  @IsOptional()
  age?: string;

  @IsString()
  @IsOptional()
  address?: string;
}


// SERVICE
@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>) { }

  createOne(data: CreateUserDto) {
    const newUser = new this.usersModel(data);
    return newUser.save();
  }

  findAll() {
    return this.usersModel.find();
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
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  createOne(@Body(ValidationPipe) data: CreateUserDto) {
    return this.usersService.createOne(data);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
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
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])],
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