import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtoModule } from './dto/dto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dto } from './dto/entities/dto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'adayr',
      password: 'ben10ulti033',
      database: 'test',
      entities: [Dto], // Asegúrate de especificar tus entidades aquí
      synchronize: true,
    }),
    // Importa el módulo ClientsModule para el cliente Redis
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        }
      },
    ]),
    // Importa el módulo DtoModule
    DtoModule,
  ],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}