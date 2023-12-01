import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from '@prisma/client';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatModel: ChatService) {}

  @Post()
  async createChat(@Body() data: { nome: string }): Promise<Chat> {
    return this.chatModel.create(data);
  }

  @Get('/:id')
  async getChatById(@Param('id') id: string): Promise<Chat> {
    return this.chatModel.findById({ id: id });
  }

  @Get()
  async getChatAll() {
    return this.chatModel.findAll();
  }

  @Delete('/:id')
  async deleteChat(@Param('id') id: string): Promise<Chat> {
    return this.chatModel.deleteChat({ id: id });
  }
}
