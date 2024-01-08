import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { Envio } from './entity/envios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Envio])],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}