import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = await this.usuarioModel.create(createUsuarioDto);

      return usuario;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.usuarioModel.find();
  }

  async findOne(id: string) {
    return await this.usuarioModel.findById(id);
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);

    try {
      await usuario.updateOne(updateUsuarioDto);

      return { ...usuario.toJSON(), ...updateUsuarioDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.usuarioModel.deleteOne({ _id: id });

    if (deletedCount === 0)
      throw new BadRequestException(`Usuario con id "${id}" no encontrado`);

    return 'Usuario fue borrado correctamente';
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Usuario exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      "Can't manage Usuario - Check server logs.",
    );
  }
}
