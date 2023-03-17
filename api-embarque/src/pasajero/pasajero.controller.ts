import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';
import { ClienteProxyVuelos } from '../common/proxy/client.proxy';
import { Observable } from 'rxjs';
import { Pasajero } from './interfaces/pasajero.interface';
import { PasajeroMSG } from '../common/constantes';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pasajeros')
@Controller('api/pasajero')
export class PasajeroController {
  private _clienteProxyPasajero = this.clienteProxy.clienteProxyPasajeros();

  constructor(private readonly clienteProxy: ClienteProxyVuelos) {}

  @Post()
  insertar(@Body() createPasajeroDto: CreatePasajeroDto): Observable<Pasajero> {
    return this._clienteProxyPasajero.send(
      PasajeroMSG.INSERTAR,
      createPasajeroDto,
    );
  }

  @Get()
  todos(): Observable<Pasajero[]> {
    return this._clienteProxyPasajero.send(PasajeroMSG.TODOS, '');
  }

  @Get(':id')
  uno(@Param('id') id: string): Observable<Pasajero> {
    return this._clienteProxyPasajero.send(PasajeroMSG.UNO, id);
  }

  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() updatePasajeroDto: UpdatePasajeroDto,
  ): Observable<Pasajero[]> {
    return this._clienteProxyPasajero.send(PasajeroMSG.ACTUALIZAR, {
      id,
      updatePasajeroDto,
    });
  }

  @Delete(':id')
  eliminar(@Param() id: string): Observable<Pasajero> {
    return this._clienteProxyPasajero.send(PasajeroMSG.ELIMINAR, id);
  }
}
