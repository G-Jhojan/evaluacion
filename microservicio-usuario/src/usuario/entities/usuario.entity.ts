import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
  @Prop({
    index: true,
  })
  nombre: string;

  @Prop({
    unique: true,
    index: true,
  })
  nombreusuario: string;

  @Prop({
    unique: true,
    index: true,
  })
  email: string;

  @Prop()
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
