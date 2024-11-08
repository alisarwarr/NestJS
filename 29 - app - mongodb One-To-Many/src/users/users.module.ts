import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users.schema';
import { UserSettings, UserSettingsSchema } from './userSettings.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }, { name: UserSettings.name, schema: UserSettingsSchema }])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}