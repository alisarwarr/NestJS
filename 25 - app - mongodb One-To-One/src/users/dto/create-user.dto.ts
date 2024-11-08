import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserSettingsDto {
    @IsBoolean()
    @IsOptional()
    receiveNotifications?: boolean;

    @IsBoolean()
    @IsOptional()
    receiveEmails?: boolean;

    @IsBoolean()
    @IsOptional()
    receiveSms?: boolean;
}

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateUserSettingsDto)
    settings?: CreateUserSettingsDto;
}