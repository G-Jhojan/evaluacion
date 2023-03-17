import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsuarioModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
  ],
})
export class AppModule {}
