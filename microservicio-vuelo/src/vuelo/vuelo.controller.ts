import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VueloService } from './vuelo.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { VueloMSG } from '../common/constantes';

@Controller()
export class VueloController {
  constructor(private readonly vueloService: VueloService) {}

  @MessagePattern(VueloMSG.INSERTAR)
  create(@Payload() createPasajeroDto: CreateVueloDto) {
    return this.vueloService.create(createPasajeroDto);
  }

  @MessagePattern(VueloMSG.TODOS)
  findAll() {
    return this.vueloService.findAll();
  }

  @MessagePattern(VueloMSG.UNO)
  findOne(@Payload() payload: any) {
    return this.vueloService.findOne(payload.id);
  }

  @MessagePattern(VueloMSG.ACTUALIZAR)
  update(@Payload() payload: any) {
    return this.vueloService.update(payload.id, payload.updateVueloDto);
  }

  @MessagePattern(VueloMSG.ELIMINAR)
  remove(@Payload() payload: any) {
    return this.vueloService.remove(payload.id);
  }
}
