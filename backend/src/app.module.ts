import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviosModule } from './envios/envios.module';
import { Envio } from './envios/entity/envios.entity';

@Module({
  imports: [
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
    EnviosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
