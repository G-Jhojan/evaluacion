import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePasajeroDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;
}
