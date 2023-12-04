import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.findUsuarioByEmail(email);

    if (usuario.senha !== senha && usuario.email !== email) {
      throw new UnauthorizedException();
    }
    const payload = { id: usuario.id, email: usuario.email };
    return {
      acess_token: await this.jwtService.signAsync(payload),
    };
  }

  async verifyToken(data: { token: string }): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(data.token);
    } catch (err) {
      throw new Error(err);
    }
    return true;
  }
}
