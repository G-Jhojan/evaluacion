import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pasajero extends Document {
  @Prop({
    index: true,
  })
  nombre: string;

  @Prop({
    unique: true,
    index: true,
  })
  correo: string;
}

export const PasajeroSchema = SchemaFactory.createForClass(Pasajero);
