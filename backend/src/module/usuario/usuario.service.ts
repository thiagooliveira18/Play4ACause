import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Usuario, Prisma } from '@prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async createUsuario(data: Usuario) {
    const userExists = await this.prisma.usuario.findFirst({
      where: {
        email: data.email,
      },
    });
    if (userExists) {
      throw new Error(
        'Já existe um usuário com este e-mail e/ou nome de usuário',
      );
    }
    const createUser = await this.prisma.usuario.create({ data });
    return createUser;
  }

  async findUsuarioById(id: string): Promise<Usuario> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error('Usuario não encontrado.');
    }
    return user;
  }

  async findUsuarioByEmail(email: string): Promise<Usuario> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error('Usuario não encontrado.');
    }
    return user;
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async deleteUsuario(
    usuarioWhereUniqueInput: Prisma.UsuarioWhereUniqueInput,
  ): Promise<Usuario> {
    return await this.prisma.usuario.delete({
      where: usuarioWhereUniqueInput,
    });
  }
}
