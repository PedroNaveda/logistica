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
exports.EnviosController = void 0;
const common_1 = require("@nestjs/common");
const envios_service_1 = require("./envios.service");
const create_envio_dto_1 = require("./dto/create-envio.dto");
let EnviosController = class EnviosController {
    constructor(enviosService) {
        this.enviosService = enviosService;
    }
    create(createEnvioDto) {
        const calculatedTarifa = this.enviosService.calcularTarifa(createEnvioDto.distancia);
        const envioWithTarifa = { ...createEnvioDto, tarifa: calculatedTarifa };
        return this.enviosService.create(envioWithTarifa);
    }
    findAll() {
        return this.enviosService.findAll();
    }
    update(id, updateEnvioDto) {
        return this.enviosService.update(id, updateEnvioDto);
    }
    delete(id) {
        return this.enviosService.delete(id);
    }
};
exports.EnviosController = EnviosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_envio_dto_1.CreateEnvioDto]),
    __metadata("design:returntype", void 0)
], EnviosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnviosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_envio_dto_1.CreateEnvioDto]),
    __metadata("design:returntype", void 0)
], EnviosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EnviosController.prototype, "delete", null);
exports.EnviosController = EnviosController = __decorate([
    (0, common_1.Controller)('envios'),
    __metadata("design:paramtypes", [envios_service_1.EnviosService])
], EnviosController);
//# sourceMappingURL=envios.controller.js.map