import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnvioDto } from './envio.dto';

Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

getAll() {
    return this.enviosService.getAllEnvios();
  }

Post(envioDto: EnvioDto) {
    return this.enviosService.createEnvio(envioDto);
  }

getTarifas() {
    return this.enviosService.getTarifas();
  }

getTarifaById(@Param('id') id: string) {
    return this.enviosService.getTarifaById(id);
  }
}