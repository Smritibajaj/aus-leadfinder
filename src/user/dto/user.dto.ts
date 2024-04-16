import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  company?: string;
}
