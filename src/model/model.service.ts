import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModelEntity } from './entity/model.entity';
import { CreateModelDto } from './dto/create-model.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateModelDto } from './dto/update-model.dto';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(ModelEntity)
    private readonly modelRepository: Repository<ModelEntity>,
  ) {}
  async findAll() {
    return await this.modelRepository.find();
  }
  async findOne(id: string) {
    return await this.modelRepository.findOne({
      where: { id },
    });
  }
  async delete(id: string) {
    return await this.modelRepository.delete(id);
  }
  async create({ description, item, title }: CreateModelDto) {
    const id = uuidv4();
    const payment = this.modelRepository.create({
      id,
      description,
      item,
      title,
    });
    return this.modelRepository.save(payment);
  }
  async update(id: string, { description, item, title }: UpdateModelDto) {
    await this.modelRepository.update(id, {
      description,
      item,
      title,
    });
    return this.findOne(id);
  }
}
