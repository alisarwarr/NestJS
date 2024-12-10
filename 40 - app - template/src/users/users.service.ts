import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>) { }

    async createOne(data: CreateUserDto) {
        const createdUser = new this.usersModel(data);
        await createdUser.save();
        return {
            message: 'user created successfully',
            createdUser
        };
    }

    async findAll() {
        const users = await this.usersModel.find();
        return {
            message: 'users fetched successfully',
            users
        };
    }

    async findOne(id: string) {
        const user = await this.usersModel.findById(id);
        return {
            message: 'user fetched successfully!',
            user
        };
    }

    async updateOne(id: string, data: UpdateUserDto) {
        const updatedUser = await this.usersModel.findByIdAndUpdate(id, data, { new: true });
        return {
            message: 'user updated successfully!',
            updatedUser
        };
    }

    async deleteOne(id: string) {
        await this.usersModel.findByIdAndDelete(id);
        return {
            message: 'user deleted successfully!'
        };
    }
}