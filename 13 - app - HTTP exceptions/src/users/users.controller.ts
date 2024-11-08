import { Controller, Get, Param, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get(':id')           /* /users/:id */
    findOne(@Param('id') id: string) {
        if (true) {
         // throw new NotFoundException("User not found");
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        }
        return id;
    }
}