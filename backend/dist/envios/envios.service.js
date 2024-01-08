"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const envios_entity_1 = require("./entity/envios.entity");
let EnviosService = class EnviosService {
    constructor(envioRepository) {
        this.envioRepository = envioRepository;
    }
    findAll() {
        return this.envioRepository.find();
    }
    create(createEnvioDto) {
        const envio = this.envioRepository.create(createEnvioDto);
        return this.envioRepository.save(envio);
    }
    update(id, updateEnvioDto) {
        return this.envioRepository.update(id, updateEnvioDto);
    }
    delete(id) {
        return this.envioRepository.delete(id);
    }
    calcularTarifa(distancia) {
        const tarifaBase = 5;
        const costoPorKilometro = 0.5;
        return tarifaBase + distancia * costoPorKilometro;
    }
};
exports.EnviosService = EnviosService;
exports.EnviosService = EnviosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(envios_entity_1.Envio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EnviosService);
//# sourceMappingURL=envios.service.js.map