import { Test, TestingModule } from '@nestjs/testing';
import { DtoController } from './dto.controller';
import { DtoService } from './dto.service';

describe('DtoController', () => {
  let controller: DtoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtoController],
      providers: [DtoService],
    }).compile();

    controller = module.get<DtoController>(DtoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
