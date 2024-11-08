import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from './posts.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts.name) private readonly postsModel: Model<Posts>) {}

    async createPost(data: CreatePostDto) {
        console.log({ data });
    }
}