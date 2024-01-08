import { Repository } from 'typeorm';
import { Envio } from './entity/envios.entity';
import { CreateEnvioDto } from './dto/create-envio.dto';
export declare class EnviosService {
    private readonly envioRepository;
    constructor(envioRepository: Repository<Envio>);
    findAll(): Promise<Envio[]>;
    create(createEnvioDto: CreateEnvioDto): Promise<Envio>;
    update(id: number, updateEnvioDto: CreateEnvioDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    calcularTarifa(distancia: number): number;
}
