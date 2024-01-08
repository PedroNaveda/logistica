import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Envio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destinatario: string;

  @Column()
  remitente: string;

  @Column()
  contenido: string;

  @Column()
  fecha_envio: string;

  @Column()
  distancia: number;

  @Column()
  tarifa: number;
}