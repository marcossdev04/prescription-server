import { Module } from '@nestjs/common';
import { ModelModule } from './model/model.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './model/entity/model.entity';

@Module({
  imports: [
    ModelModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '010203',
      database: 'postgres',
      entities: [ModelEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
