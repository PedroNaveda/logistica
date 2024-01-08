import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './dto/create-envio.dto';
export declare class EnviosController {
    private readonly enviosService;
    constructor(enviosService: EnviosService);
    create(createEnvioDto: CreateEnvioDto): Promise<import("./entity/envios.entity").Envio>;
    findAll(): Promise<import("./entity/envios.entity").Envio[]>;
    update(id: number, updateEnvioDto: CreateEnvioDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
