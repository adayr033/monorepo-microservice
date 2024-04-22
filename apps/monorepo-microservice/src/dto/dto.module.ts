import { Module } from '@nestjs/common';
import { DtoService } from './dto.service';
import { DtoController } from './dto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Dto } from './entities/dto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dto]),
    ClientsModule.register([
      { 
        name: 'MAIL_SERVICE', 
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [DtoController],
  providers: [DtoService],
})
export class DtoModule {}
