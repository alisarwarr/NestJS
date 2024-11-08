import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './userSettings.schema';

@Schema()
export class Users {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: false })
    age?: number;

    @Prop({ required: false })
    address?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
    settings?: UserSettings;
}

export const UsersSchema = SchemaFactory.createForClass(Users);