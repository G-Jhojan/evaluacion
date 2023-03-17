import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vuelo } from './entities/vuelo.entity';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';

@Injectable()
export class VueloService {
  constructor(
    @InjectModel(Vuelo.name)
    private readonly vueloModel: Model<Vuelo>,
  ) {}

  async create(createVueloDto: CreateVueloDto) {
    try {
      const vuelo = await this.vueloModel.create(createVueloDto);

      return vuelo;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.vueloModel.find();
  }

  async findOne(id: string) {
    return await this.vueloModel.findById(id);
  }

  async update(id: string, updateVueloDto: UpdateVueloDto) {
    const vuelo = await this.findOne(id);

    try {
      await vuelo.updateOne(updateVueloDto);

      return { ...vuelo.toJSON(), ...updateVueloDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.vueloModel.deleteOne({ _id: id });

    if (deletedCount === 0)
      throw new BadRequestException(`Vuelo with id "${id}" not found`);

    return 'Vuelo fue borrado correctamente';
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Vuelo exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      "Can't manage Vuelo - Check server logs.",
    );
  }
}
