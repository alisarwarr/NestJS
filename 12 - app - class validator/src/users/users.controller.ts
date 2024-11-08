import { Body, Controller, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    // @Post()      /* /users */
    // @UsePipes(new ValidationPipe())
    // createOne(@Body() data: CreateUserDto) {
    //     return data;
    // }

    // @Post()      /* /users */
    // @UsePipes(ValidationPipe)
    // createOne(@Body() data: CreateUserDto) {
    //     return data;
    // }

    // @Post()      /* /users */
    // createOne(@Body(new ValidationPipe()) data: CreateUserDto) {
    //     return data;
    // }

    @Post()         /* /users */
    createOne(@Body(ValidationPipe) data: CreateUserDto) {
        return data;
    }
}