import { Controller, Get, Param, ParseIntPipe, UsePipes } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // @Get(':id')        /* /users/:id */
    // @UsePipes(new ParseIntPipe())
    // findOne(@Param('id') id: number) {
    //     return id;
    // }

    // @Get(':id')        /* /users/:id */
    // @UsePipes(ParseIntPipe)
    // findOne(@Param('id') id: number) {
    //     return id;
    // }

    // @Get(':id')        /* /users/:id */
    // findOne(@Param('id', new ParseIntPipe()) id: number) {
    //     return id;
    // }

    @Get(':id')           /* /users/:id */
    findOne(@Param('id', ParseIntPipe) id: number) {
        return id;
    }
}