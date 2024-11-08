import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';
import { UserSettings } from './userSettings.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private readonly usersModel: Model<Users>,
        @InjectModel(UserSettings.name) private readonly userSettingsModel: Model<UserSettings>
    ) {}

    async createOne({ settings, ...data }: CreateUserDto) {
        if (settings) {
            const newUserSettings = new this.userSettingsModel(settings);
            const savedNewUserSettings = await newUserSettings.save();
            const newUser = new this.usersModel({
                ...data,
                settings: savedNewUserSettings._id
            });
            return newUser.save();
        }
        const newUser = new this.usersModel(data);
        return newUser.save();
    }

    findAll() {
        return this.usersModel.find().populate(['settings', 'posts']);
    }

    findOne(id: string) {
        return this.usersModel.findById(id).populate('settings', 'posts');
    }

    updateOne(id: string, data: UpdateUserDto) {
        return this.usersModel.findByIdAndUpdate(id, data, { new: true });
    }

    deleteOne(id: string) {
        return this.usersModel.findByIdAndDelete(id);
    }
}