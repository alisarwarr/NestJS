import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    ---- ---- crud ---- ----
        POST    /users
        GET     /users
        GET     /users/:id
        PATCH   /users/:id
        DELETE  /users/:id
    */

    @Post()            /* /users */
    createOne(@Body() data: {}) {
        return data;
    }

    @Get()             /* /users */
    findAll() {
        return [];
    }

    @Get(':id')        /* /users/:id */
    findOne(@Param('id') id: string) {
        return id;
    }

    @Patch(':id')      /* /users/:id */
    updateOne(@Param('id') id: string, @Body() data: {}) {
        return { id, ...data };
    }

    @Delete(':id')     /* /users/:id */
    deleteOne(@Param('id') id: string) {
        return id;
    }
}