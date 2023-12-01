import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { UsuarioModule } from './module/usuario/usuario.module';

@Module({
  imports: [GatewayModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
