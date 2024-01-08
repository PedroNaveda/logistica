import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  create(@Body() createEnvioDto: CreateEnvioDto) {
    const calculatedTarifa = this.enviosService.calcularTarifa(createEnvioDto.distancia);
    const envioWithTarifa = { ...createEnvioDto, tarifa: calculatedTarifa };
    return this.enviosService.create(envioWithTarifa);
  }

  @Get()
  findAll() {
    return this.enviosService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateEnvioDto: CreateEnvioDto) {
    return this.enviosService.update(id, updateEnvioDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.enviosService.delete(id);
  }
}