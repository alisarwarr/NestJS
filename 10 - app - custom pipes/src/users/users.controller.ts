import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersPipe } from './users.pipe';

@Controller('users')
export class UsersController {
    // @Get(':id')        /* /users/:id */
    // @UsePipes(new ValidationPipe())
    // findOne(@Param('id', UsersPipe) id: number) {
    //     return id;
    // }

    // @Get(':id')        /* /users/:id */
    // @UsePipes(ValidationPipe)
    // findOne(@Param('id', UsersPipe) id: number) {
    //     return id;
    // }

    // @Get(':id')        /* /users/:id */
    // findOne(@Param('id', new UsersPipe()) id: number) {
    //     return id;
    // }

    @Get(':id')           /* /users/:id */
    findOne(@Param('id', UsersPipe) id: number) {
        return id;
    }
}