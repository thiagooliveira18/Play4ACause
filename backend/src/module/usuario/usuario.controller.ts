import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '@prisma/client';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly userModel: UsuarioService) {}

  @Post()
  async signupUsuario(@Body() data: Usuario) {
    return this.userModel.createUsuario(data);
  }

  @Get('/byid/:id')
  async getUsuarioById(@Param('id') id: string): Promise<Usuario> {
    return this.userModel.findUsuarioById(id);
  }

  @Get('/email/:email')
  async getUsuarioByEmail(@Param('email') email: string): Promise<Usuario> {
    return this.userModel.findUsuarioByEmail(email);
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
