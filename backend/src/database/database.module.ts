import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from '../envios/entity/envios.entity';

TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'logistica',
    entities: [Envio],
    synchronize: true,
    logging: true,
  })