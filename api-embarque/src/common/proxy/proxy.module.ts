import { Module } from '@nestjs/common';
import { ClienteProxyVuelos } from './client.proxy';

@Module({
  imports: [ProxyModule],
  providers: [ClienteProxyVuelos],
  exports: [ClienteProxyVuelos],
})
export class ProxyModule {}
