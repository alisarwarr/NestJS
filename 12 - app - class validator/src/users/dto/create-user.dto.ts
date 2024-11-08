import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(['Student', 'Developer'], { message: 'valid role required' })
    @IsNotEmpty()
    role: 'Student' | 'Developer';
}