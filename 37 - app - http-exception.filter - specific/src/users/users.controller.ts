import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from '../all-exceptions.filter';

@Controller('users')
@UseFilters(AllExceptionsFilter)
export class UsersController {
    @Get('http-exception')
    httpException() {
        throw new HttpException('This is an HttpException', HttpStatus.BAD_REQUEST);
    }

    @Get('error')
    genericError() {
        throw new Error('This is an Error');
    }

    @Get('internal-server-error')
    internalServerError() {
        throw 'This is an unknown exception type';
    }
}