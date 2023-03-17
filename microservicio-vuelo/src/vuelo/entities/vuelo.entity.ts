import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vuelo extends Document {
  @Prop({
    index: true,
  })
  nombre: string;

  @Prop()
  numeropasajeros: string;

  @Prop()
  asientos: string;
}

export const VueloSchema = SchemaFactory.createForClass(Vuelo);
