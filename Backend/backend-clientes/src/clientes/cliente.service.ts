// src/clientes/cliente.service.ts
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    try {
      return await this.clienteRepo.find();
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener los clientes');
    }
  }

  async findOne(id: string): Promise<Cliente> {
    const cliente = await this.clienteRepo.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return cliente;
  }

  async create(data: CreateClienteDto): Promise<Cliente> {
    try {
      const cliente = this.clienteRepo.create(data);
      return await this.clienteRepo.save(cliente);
    } catch (error) {
      throw new InternalServerErrorException('Error al crear el cliente');
    }
  }

  async update(id: string, data: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteRepo.preload({
      id,
      ...data,
    });
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return this.clienteRepo.save(cliente);
  }

  async delete(id: string): Promise<{ message: string }> {
    const result = await this.clienteRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return { message: `Cliente con ID ${id} eliminado correctamente` };
  }
}
