import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    // @Post()            /* /users */
    // createOne(@Body() data: {}) {
    //     console.log({ data });
    //     return user;
    // }

    @Post()               /* /users */
    createOne(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send(request.body);
    }

    // @Get(':id')        /* /users/:id */
    // findOne(@Param('id') id: string) {
    //     return id;
    // }

    @Get(':id')           /* /users/:id */
    findOne(@Req() request: Request, @Res() response: Response) {
        console.log(request.params);
        response.send(request.params.id);
    }
}