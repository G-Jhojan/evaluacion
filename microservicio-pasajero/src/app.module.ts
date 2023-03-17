import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PasajeroModule } from './pasajero/pasajero.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PasajeroModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
  ],
})
export class AppModule {}
