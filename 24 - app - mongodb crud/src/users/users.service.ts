import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>) {}

    createOne(data: CreateUserDto) {
        const newUser = new this.usersModel(data);
        return newUser.save();
    }

    findAll() {
        return this.usersModel.find();
    }

    findOne(id: string) {
        return this.usersModel.findById(id);
    }

    updateOne(id: string, data: UpdateUserDto) {
        return this.usersModel.findByIdAndUpdate(id, data, { new: true });
    }

    deleteOne(id: string) {
        return this.usersModel.findByIdAndDelete(id);
    }
}