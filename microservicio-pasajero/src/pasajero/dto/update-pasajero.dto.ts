import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId } from 'class-validator';
import { CreatePasajeroDto } from './create-pasajero.dto';

export class UpdatePasajeroDto extends PartialType(CreatePasajeroDto) {
  @IsMongoId()
  id: string;
}
