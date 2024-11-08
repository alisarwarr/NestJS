import { Controller, Get, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    @Get()
 // @UseGuards(AuthGuard)
    helloWorld() {
        return "Hello World";
    }
}