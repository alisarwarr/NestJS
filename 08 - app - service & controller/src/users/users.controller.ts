import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
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

    @Post()            /* /users */
    createOne(@Body() data: { name: string, role: 'Student' | 'Developer' }) {
        return this.usersService.createOne(data);
    }

    @Get()             /* /users */
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')        /* /users/:id */
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Patch(':id')      /* /users/:id */
    updateOne(@Param('id') id: string, @Body() data: { name: string, role: 'Student' | 'Developer' }) {
        return this.usersService.updateOne(Number(id), data);
    }

    @Delete(':id')     /* /users/:id */
    deleteOne(@Param('id') id: string) {
        return this.usersService.deleteOne(Number(id));
    }
}