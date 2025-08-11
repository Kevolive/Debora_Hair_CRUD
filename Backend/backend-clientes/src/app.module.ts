import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { ClienteModule } from './clientes/cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // variables disponibles en toda la app
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
