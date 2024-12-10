import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(res: Response): void {
    const filePath = join(__dirname, '..', 'public', 'index.html');
    res.sendFile(filePath);
  }
}