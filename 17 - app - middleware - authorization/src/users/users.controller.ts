import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    helloWorld() {
        return "Hello World";
    }
}