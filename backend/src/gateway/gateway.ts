import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MyGateway
  implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  onModuleInit() {
    this.server.on('connection', () => {
      console.log('Succesful Connected.');
    });
  }

  handleConnection(client: Socket) {
    console.log(`User: ${client.id} connected.`);
  }
  handleDisconnect(client: Socket) {
    console.log(`User: ${client.id} disconnected.`);
  }

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any): void {
    this.server.emit('onMessage', body);
  }
}
