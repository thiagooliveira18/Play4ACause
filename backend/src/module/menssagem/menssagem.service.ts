import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Menssagem, Prisma } from '@prisma/client';

@Injectable()
export class MenssagemService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MenssagemCreateInput): Promise<Menssagem> {
    return this.prisma.menssagem.create({
      data,
    });
  }

  async deleteMsg(
    menssagemWhereUniqueInput: Prisma.MenssagemWhereUniqueInput,
  ): Promise<Menssagem> {
    return this.prisma.menssagem.delete({
      where: menssagemWhereUniqueInput,
    });
  }

  async findAll() {
    return this.prisma.menssagem.findMany();
  }
}
