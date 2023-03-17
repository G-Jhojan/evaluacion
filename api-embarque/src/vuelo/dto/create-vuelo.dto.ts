import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateVueloDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  piloto: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  avion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destino: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fechaVuelo: Date;
}
