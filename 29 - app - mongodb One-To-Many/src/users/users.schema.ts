import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './userSettings.schema';
import { Posts } from '../posts/posts.schema';

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

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
    posts: Posts[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);