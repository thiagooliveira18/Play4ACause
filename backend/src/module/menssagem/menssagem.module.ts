import { Module } from '@nestjs/common';
import { MenssagemService } from './menssagem.service';
import { MenssagemController } from './menssagem.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MenssagemController],
  providers: [MenssagemService, PrismaService],
})
export class MenssagemModule {}
