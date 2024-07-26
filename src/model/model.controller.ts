import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ModelService } from './model.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get()
  findAll() {
    return this.modelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelService.findOne(id);
  }

  @Post()
  create(@Body() createModelDto: CreateModelDto) {
    this.modelService.create(createModelDto);
    return createModelDto;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateModelDto) {
    return await this.modelService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.modelService.delete(id);
  }
}
