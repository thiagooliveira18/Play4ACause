import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { UsuarioModule } from './module/usuario/usuario.module';
import { ChatModule } from './module/chat/chat.module';
import { MenssagemModule } from './module/menssagem/menssagem.module';

@Module({
  imports: [GatewayModule, UsuarioModule, ChatModule, MenssagemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
