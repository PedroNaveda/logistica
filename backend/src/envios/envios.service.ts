import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Envio } from './entity/envios.entity';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Injectable()
export class EnviosService {
  constructor(
    @InjectRepository(Envio)
    private readonly envioRepository: Repository<Envio>,
  ) {}

  findAll() {
    return this.envioRepository.find();
  }

  create(createEnvioDto: CreateEnvioDto) {
    const envio = this.envioRepository.create(createEnvioDto);
    return this.envioRepository.save(envio);
  }

  update(id: number, updateEnvioDto: CreateEnvioDto) {
    return this.envioRepository.update(id, updateEnvioDto);
  }

  delete(id: number) {
    return this.envioRepository.delete(id);
  }

  calcularTarifa(distancia: number): number {
    const tarifaBase = 5;
    const costoPorKilometro = 0.5;
    return tarifaBase + distancia * costoPorKilometro;
  }
}