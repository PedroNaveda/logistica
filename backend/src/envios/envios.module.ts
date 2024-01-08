import { Module } from '@nestjs/common';
import { EnviosController } from './envios.controller';

@Module({
  controllers: [EnviosController]
})
export class EnviosModule {}
