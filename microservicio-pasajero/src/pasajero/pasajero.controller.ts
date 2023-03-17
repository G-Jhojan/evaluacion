import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PasajeroService } from './pasajero.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { PasajeroMSG } from '../common/constantes';

@Controller()
export class PasajeroController {
  constructor(private readonly pasajeroService: PasajeroService) {}

  @MessagePattern(PasajeroMSG.INSERTAR)
  create(@Payload() createPasajeroDto: CreatePasajeroDto) {
    return this.pasajeroService.create(createPasajeroDto);
  }

  @MessagePattern(PasajeroMSG.TODOS)
  findAll() {
    return this.pasajeroService.findAll();
  }

  @MessagePattern(PasajeroMSG.UNO)
  findOne(@Payload() payload: any) {
    return this.pasajeroService.findOne(payload.id);
  }

  @MessagePattern(PasajeroMSG.ACTUALIZAR)
  update(@Payload() payload: any) {
    return this.pasajeroService.update(payload.id, payload.updatePasajeroDto);
  }

  @MessagePattern(PasajeroMSG.ELIMINAR)
  remove(@Payload() payload: any) {
    return this.pasajeroService.remove(payload.id);
  }
}
