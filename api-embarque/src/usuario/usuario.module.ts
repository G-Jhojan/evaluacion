import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [UsuarioController],
  // exports: [UsuarioController],
})
export class UsuarioModule {}
