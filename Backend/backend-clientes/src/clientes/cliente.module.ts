// src/clientes/cliente.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { WhatsappService } from './whatsapp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService, WhatsappService],
  controllers: [ClienteController],
})
export class ClienteModule {
  
}
