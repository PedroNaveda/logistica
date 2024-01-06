import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class EnvioDto {
  @IsNotEmpty()
  @IsString()
  destinatario: string;

  @IsNotEmpty()
  @IsString()
  remitente: string;

  @IsNotEmpty()
  @IsString()
  contenido: string;

  @IsNotEmpty()
  @IsDate()
  fecha_envio: Date;

  @IsNotEmpty()
  @IsNumber()
  distancia: number;
}