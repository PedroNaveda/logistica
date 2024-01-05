import { Injectable, NotFoundException } from '@nestjs/common';
import { EnvioDto } from './envio.dto';

Injectable()
export class EnviosService {
  private envios = [];

  getAllEnvios() {
    return this.envios;
  }

  createEnvio(envioDto: EnvioDto) {
    const tarifa = this.calcularTarifa(envioDto.distancia);
    const envio = { ...envioDto, tarifa };

    this.envios.push(envio);
    return envio;
  }

  getTarifas() {
    return this.envios.map((envio, index) => ({
      id: index,
      tarifa: envio.tarifa,
    }));
  }

  getTarifaById(id: string) {
    const tarifa = this.envios[+id]?.tarifa;
    if (tarifa === undefined) {
      throw new NotFoundException(`Tarifa con ID ${id} no encontrada.`);
    }
    return { id, tarifa };
  }

  private calcularTarifa(distancia: number): number {
    const tarifaBase = 5;
    const costoPorKilometro = 0.5;
    return tarifaBase + distancia * costoPorKilometro;
  }
}