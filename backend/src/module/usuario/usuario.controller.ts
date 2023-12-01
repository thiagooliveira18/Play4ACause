import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '@prisma/client';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly userModel: UsuarioService) {}

  @Post()
  async signupUsuario(
    @Body() data: { email: string; usuario: string; senha: string },
  ): Promise<Usuario> {
    return this.userModel.createUsuario(data);
  }

  @Get('/:id')
  async getUsuarioById(@Param('id') id: string): Promise<Usuario> {
    return this.userModel.findUsuario({ id: id });
  }

  @Get()
  async getAllUsuario() {
    return this.userModel.findAll();
  }

  @Delete('/:id')
  async deleteUsuario(@Param('id') id: string): Promise<Usuario> {
    return this.userModel.deleteUsuario({ id: id });
  }
}
