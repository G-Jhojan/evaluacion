import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVueloDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  numeropasajeros: string;

  @IsNotEmpty()
  @IsString()
  asientos: string;
}
