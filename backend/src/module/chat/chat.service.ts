import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Chat, Prisma } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ChatCreateInput): Promise<Chat> {
    return this.prisma.chat.create({
      data,
    });
  }

  async findById(
    chatWhereUniqueInput: Prisma.ChatWhereUniqueInput,
  ): Promise<Chat> {
    return this.prisma.chat.findUnique({
      where: chatWhereUniqueInput,
    });
  }

  async findAll() {
    return this.prisma.chat.findMany();
  }

  async deleteChat(
    chatWhereUniqueInput: Prisma.ChatWhereUniqueInput,
  ): Promise<Chat> {
    return this.prisma.chat.delete({
      where: chatWhereUniqueInput,
    });
  }
}
