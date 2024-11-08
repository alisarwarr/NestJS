import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from './posts.schema';
import { Users } from '../users/users.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Posts.name) private readonly postsModel: Model<Posts>,
        @InjectModel(Users.name) private readonly usersModel: Model<Users>
    ) {}

    async createPost({ userId, ...data }: CreatePostDto) {
        const result = this.usersModel.findById(userId);
        if(!result) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        const newPost = new this.postsModel(data);
        const savedPosts = await newPost.save();
        await result.updateOne({
            $push: {
                posts: savedPosts._id
            }
        });
        return savedPosts;
    }
}