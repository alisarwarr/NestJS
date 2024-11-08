import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostSchema } from './posts.schema';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}