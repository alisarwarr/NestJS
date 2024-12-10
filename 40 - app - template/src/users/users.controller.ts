import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose from 'mongoose';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    /*
    ---- ---- crud ---- ----
        POST    /users
        GET     /users
        GET     /users/:id
        PATCH   /users/:id
        DELETE  /users/:id
    */

    @Post()
    createOne(@Body(ValidationPipe) data: CreateUserDto) {
        return this.usersService.createOne(data);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if(!isValidId) throw new HttpException("Invalid Id", 400);
        const result = this.usersService.findOne(id);
        if(!result) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        return result;
    }

    @Patch(':id')
    updateOne(@Param('id') id: string, @Body(ValidationPipe) data: UpdateUserDto) {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if(!isValidId) throw new HttpException("Invalid Id", 400);
        const result = this.usersService.updateOne(id, data);
        if(!result) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        return result;
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if(!isValidId) throw new HttpException("Invalid Id", 400);
        const result = this.usersService.deleteOne(id);
        if(!result) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        return result;
    }
}