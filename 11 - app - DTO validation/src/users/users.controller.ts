import { Body, Controller, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()            /* /users */
    createOne(@Body() data: CreateUserDto) {
        return this.usersService.createOne(data);
    }

    @Patch(':id')      /* /users/:id */
    updateOne(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
        return this.usersService.updateOne(id, data);
    }
}