// src/typeorm.config.ts
import 'dotenv/config'; // Carga variables del .env
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Cliente } from './clientes/cliente.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'KevDeb93', // Cambia si tu clave es otra
  database: process.env.DB_NAME || 'clientesdb_crud',
  entities: [Cliente],
  synchronize: true, // ⚠ Solo en desarrollo
  ssl: false, // 🚫 Sin SSL para local
};
