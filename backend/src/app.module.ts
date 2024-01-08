import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnviosModule } from './envios/envios.module';

@Module({
  imports: [EnviosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
