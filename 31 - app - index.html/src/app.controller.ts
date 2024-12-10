import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
    @Get()
    getHello(@Res() res: Response): void {
        const filePath = join(__dirname, '../', 'public', 'index.html');
        res.sendFile(filePath);
    }
}