import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from '../envios/entity/envios.entity';

TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'logistica_postgres_1',
    port: 5434,
    username: 'postgres',
    password: 'postgres',
    database: 'logistica',
    entities: [Envio],
    synchronize: true,
    logging: true,
  }),