import { Module } from '@nestjs/common';
import { PasajeroService } from './pasajero.service';
import { PasajeroController } from './pasajero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pasajero, PasajeroSchema } from './entities/pasajero.entity';

@Module({
  controllers: [PasajeroController],
  providers: [PasajeroService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Pasajero.name,
        schema: PasajeroSchema,
      },
    ]),
  ],
})
export class PasajeroModule {}
