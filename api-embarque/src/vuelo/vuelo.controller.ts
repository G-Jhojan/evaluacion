import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { ClienteProxyVuelos } from '../common/proxy/client.proxy';
import { VueloMSG, PasajeroMSG } from '../common/constantes';
import { Observable } from 'rxjs';
import { Vuelo } from './interfaces/vuelo.interface';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { HttpException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vuelos')
@Controller('api/vuelo')
export class VueloController {
  private _clienteProxyVuelo = this.clienteProxy.clienteProxyVuelos();
  private _clienteProxyPasajero = this.clienteProxy.clienteProxyPasajeros();

  constructor(private readonly clienteProxy: ClienteProxyVuelos) {}

  @Post()
  insertar(@Body() createVueloDto: CreateVueloDto): Observable<Vuelo> {
    return this._clienteProxyVuelo.send(VueloMSG.INSERTAR, createVueloDto);
  }

  @Get()
  todos(): Observable<Vuelo[]> {
    return this._clienteProxyVuelo.send(VueloMSG.TODOS, '');
  }

  @Get(':id')
  uno(@Param('id') id: string): Observable<Vuelo> {
    return this._clienteProxyVuelo.send(VueloMSG.UNO, id);
  }

  @Put(':id')
  actualizar(
    @Param('id') id: string,
    @Body() updateVueloDto: UpdateVueloDto,
  ): Observable<Vuelo[]> {
    return this._clienteProxyVuelo.send(VueloMSG.ACTUALIZAR, {
      id,
      updateVueloDto,
    });
  }

  @Delete(':id')
  eliminar(@Param() id: string): Observable<Vuelo> {
    return this._clienteProxyVuelo.send(VueloMSG.ELIMINAR, id);
  }

  @Post(':vueloId/pasajero/:pasajeroId')
  async agregarPasajero(
    @Param('vueloId') vueloId: string,
    @Param('pasajeroId') pasajeroId: string,
  ) {
    const pasajero = this._clienteProxyPasajero.send(
      PasajeroMSG.UNO,
      pasajeroId,
    );

    if (!pasajero)
      throw new HttpException('Pasajero no existe.', HttpStatus.NOT_FOUND);

    return this._clienteProxyVuelo.send(VueloMSG.AGREGAR, {
      vueloId,
      pasajeroId,
    });
  }
}
