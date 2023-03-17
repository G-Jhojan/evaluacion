import { Module } from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { VueloController } from './vuelo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vuelo, VueloSchema } from './entities/vuelo.entity';

@Module({
  controllers: [VueloController],
  providers: [VueloService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Vuelo.name,
        schema: VueloSchema,
      },
    ]),
  ],
})
export class VueloModule {}
