import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    createPost(@Body(ValidationPipe) data: CreatePostDto) {
        return this.postsService.createPost(data);
    }
}