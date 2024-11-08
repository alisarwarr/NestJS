import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>) {}
}