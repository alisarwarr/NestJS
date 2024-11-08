import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostSchema } from './posts.schema';
import { Users, UsersSchema } from '../users/users.schema';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }, { name: Users.name, schema: UsersSchema }])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}