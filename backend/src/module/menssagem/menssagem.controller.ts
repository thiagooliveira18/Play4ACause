import { Controller, Post, Body, Delete, Get, Param } from '@nestjs/common';
import { MenssagemService } from './menssagem.service';
import { Menssagem } from '@prisma/client';

@Controller('msg')
export class MenssagemController {
  constructor(private readonly msgModel: MenssagemService) {}

  @Post()
  async createMsg(
    @Body()
    data: {
      texto: string;
      data_hora: string;
      id_usuario: string;
      id_chat: string;
    },
  ): Promise<Menssagem> {
    const { texto, data_hora, id_usuario, id_chat } = data;
    return this.msgModel.create({
      texto,
      data_hora,
      autor: {
        connect: { id: id_usuario },
      },
      chat: {
        connect: { id: id_chat },
      },
    });
  }

  @Delete('/:id')
  async deleteMenssage(@Param('id') id: string): Promise<Menssagem> {
    return this.msgModel.deleteMsg({ id: id });
  }

  @Get()
  async findAllMsg() {
    return this.msgModel.findAll();
  }
}
