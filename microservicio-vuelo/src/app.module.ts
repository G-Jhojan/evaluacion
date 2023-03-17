import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VueloModule } from './vuelo/vuelo.module';

@Module({
  imports: [
    VueloModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
  ],
})
export class AppModule {}
