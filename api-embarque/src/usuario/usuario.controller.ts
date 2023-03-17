import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ClienteProxyVuelos } from 'src/common/proxy/client.proxy';
import { Observable } from 'rxjs';
import { Usuario } from './interfaces/usuario.interface';
import { UserMSG } from '../common/constantes';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('api/usuario')
export class UsuarioController {
  private _clienteProxyUsuario = this.clienteProxy.clienteProxyUsuarios();

  constructor(
    // private readonly usuarioService: UsuarioService, // Todo
    private readonly clienteProxy: ClienteProxyVuelos,
  ) {}

  @Post()
  insertar(@Body() createUsuarioDto: CreateUsuarioDto): Observable<Usuario> {
    return this._clienteProxyUsuario.send(UserMSG.INSERTAR, createUsuarioDto);
  }

  @Get()
  todos(): Observable<Usuario[]> {
    return this._clienteProxyUsuario.send(UserMSG.TODOS, '');
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this._clienteProxyUsuario.send(UserMSG.UNO, id);
  }

  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ): Observable<Usuario[]> {
    return this._clienteProxyUsuario.send(UserMSG.ACTUALIZAR, {
      id,
      updateUsuarioDto,
    });
  }

  @Delete(':id')
  eliminar(@Param() id: string) {
    return this._clienteProxyUsuario.send(UserMSG.ELIMINAR, id);
  }
}
