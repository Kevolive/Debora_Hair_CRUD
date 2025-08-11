// src/clientes/cliente.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { WhatsappService } from './whatsapp.service';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService,
              private readonly whatsappService: WhatsappService, // Agrega esto
  ) {}

  @Get()
  async findAll() {
    const data = await this.clienteService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Lista de clientes obtenida correctamente',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.clienteService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      message: `Cliente con ID ${id} obtenido correctamente`,
      data,
    };
  }

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    const data = await this.clienteService.create(createClienteDto);

    const fechaHoy = new Date();
    const fechaMantenimiento = new Date(fechaHoy.setMonth(fechaHoy.getMonth() + 3));
    const fechaMantemientoStr = fechaMantenimiento.toLocaleDateString();

    if(data.cel) {
      const mensaje = `Hola ${data.nombre}, su próximo mantenimiento es apróximadamente el ${fechaMantemientoStr}. Cualquier cosa primo, me avisai`;
    console.log('Enviando mensaje de WhatsApp a:', data.cel);
      await this.whatsappService.sendWhatsapp(data.cel, mensaje);
    }
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Cliente creado correctamente',
      data,
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dataUpdate: UpdateClienteDto) {
    const data = await this.clienteService.update(id, dataUpdate);
    return {
      statusCode: HttpStatus.OK,
      message: `Cliente con ID ${id} actualizado correctamente`,
      data,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.clienteService.delete(id);
    return {
      statusCode: HttpStatus.OK,
      message: data.message,
    };
  }
}
