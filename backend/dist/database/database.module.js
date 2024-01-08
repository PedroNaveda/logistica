"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const envios_entity_1 = require("../envios/entity/envios.entity");
typeorm_1.TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '*1nv1s1bl3*',
    database: 'logistica',
    entities: [envios_entity_1.Envio],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=database.module.js.map