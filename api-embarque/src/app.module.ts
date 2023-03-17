import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { PasajeroModule } from './pasajero/pasajero.module';
import { VueloModule } from './vuelo/vuelo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UsuarioModule,
    PasajeroModule,
    VueloModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
