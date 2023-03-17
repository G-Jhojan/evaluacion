import { Controller } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from '../common/constantes';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @MessagePattern(UserMSG.INSERTAR)
  create(@Payload() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @MessagePattern(UserMSG.TODOS)
  findAll() {
    return this.usuarioService.findAll();
  }

  @MessagePattern(UserMSG.UNO)
  findOne(@Payload() payload: any) {
    return this.usuarioService.findOne(payload.id);
  }

  @MessagePattern(UserMSG.ACTUALIZAR)
  update(
    // @Payload() payload: any,
    @Payload() payload: { id: string; updateUsuarioDto: UpdateUsuarioDto },
  ) {
    const { id, updateUsuarioDto } = payload;
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @MessagePattern(UserMSG.ELIMINAR)
  remove(@Payload() payload: any) {
    return this.usuarioService.remove(payload.id);
  }
}
