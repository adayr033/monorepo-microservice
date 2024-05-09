import { Controller, Get, Render } from '@nestjs/common';

@Controller('index')
export class IndexController {
  @Get()
  @Render('index')
  root() {
    return []
  }
}