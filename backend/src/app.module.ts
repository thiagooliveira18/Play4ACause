import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { UsuarioModule } from './module/usuario/usuario.module';
import { ChatModule } from './module/chat/chat.module';

@Module({
  imports: [GatewayModule, UsuarioModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
