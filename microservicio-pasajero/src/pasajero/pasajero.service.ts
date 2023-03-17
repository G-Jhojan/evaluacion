import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pasajero } from './entities/pasajero.entity';
import { Model } from 'mongoose';

@Injectable()
export class PasajeroService {
  constructor(
    @InjectModel(Pasajero.name)
    private readonly pasajeroModel: Model<Pasajero>,
  ) {}

  async create(createPasajeroDto: CreatePasajeroDto) {
    try {
      const pasajero = await this.pasajeroModel.create(createPasajeroDto);

      return pasajero;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.pasajeroModel.find();
  }

  async findOne(id: string) {
    return await this.pasajeroModel.findById(id);
  }

  async update(id: string, updatePasajeroDto: UpdatePasajeroDto) {
    const pasajero = await this.findOne(id);

    try {
      await pasajero.updateOne(updatePasajeroDto);

      return { ...pasajero.toJSON(), ...updatePasajeroDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.pasajeroModel.deleteOne({ _id: id });

    if (deletedCount === 0)
      throw new BadRequestException(`Pokemon with id "${id}" not found`);

    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Pokemon exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      "Can't manage Pokemon - Check server logs.",
    );
  }
}
