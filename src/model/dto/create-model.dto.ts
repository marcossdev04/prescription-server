import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Item } from 'src/interfaces/item';

export class CreateModelDto {
  @ApiProperty({
    description: 'Descrição',
    example: '',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Data',
    example: '',
  })
  @IsString()
  item: Item[];

  @ApiProperty({
    description: 'Descrição',
    example: '',
  })
  @IsString()
  description: string;
}
