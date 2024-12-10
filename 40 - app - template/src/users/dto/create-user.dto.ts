import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;
  
    @IsNumber()
    @IsOptional()
    age?: string;
  
    @IsString()
    @IsOptional()
    address?: string;
}