import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: false })
    age?: number;

    @Prop({ required: false })
    address?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);