import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  Id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'vui long nhap lon hon 2 ky tu' })
  Name: string;

  @IsNumber()
  @IsNotEmpty()
  Price: number;

  @IsString()
  @IsNotEmpty()
  @IsEmail(null, { message: 'Vui long nhap dung dinh dang gmail' })
  @MinLength(2, { message: 'vui long nhap lon hon 2 ky tu' })
  Gmail: string;
}
