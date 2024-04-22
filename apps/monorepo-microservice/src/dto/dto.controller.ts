import { Body, Controller, Get, Post, Param, Req, Patch, Delete } from '@nestjs/common';
import { Request } from 'express';
import { DtoService } from './dto.service';
import { CreateDto } from './dto/create-dto.dto';

@Controller('')
export class DtoController {
  constructor(private dtoService: DtoService) { }

  @Post()
  createUser(@Body() newUser: CreateDto) {
      return this.dtoService.createUser(newUser);

  }

  /*@Post(':id/username/:username/password/:password')
  create(@Param() Param: any) {
    return { Param };
  }*/

  @Get('getruta')
  metodotget(@Req() req: Request) {
    return `metodo ${req.method}`;
  }

  @Patch('')
  metodoget(@Req() req: Request) {
    return `metodo ${req.method}`;
  }

  @Delete(':id')
  metododelete(@Req() req: Request) {
    return `metodo ${req.method}`;
  }
}