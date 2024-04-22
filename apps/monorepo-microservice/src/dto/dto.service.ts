import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create-dto.dto';
import { UpdateTaDto } from './dto/update-dto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';
import { Dto } from './entities/dto.entity';

@Injectable()
export class DtoService {
  constructor(
    @InjectRepository(Dto) private readonly UserRepository: Repository<Dto>,
    @Inject('MAIL_SERVICE') private readonly clientMail?: ClientProxy,) { }

    async createUser(User: CreateDto) {
      const userFound = await this.UserRepository.findOne({ where: { username: User.username } });

      if (userFound) {
          throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }

      const newUser = this.UserRepository.create(User);
      const savedUser = await this.UserRepository.save(newUser);

      // Esto es para poder Emitir el evento 'user_created'
      this.clientMail.emit('user_created', savedUser);

      return savedUser;
    }
    
}
