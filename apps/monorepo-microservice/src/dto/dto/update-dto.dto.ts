import { PartialType } from '@nestjs/mapped-types';
import { CreateDto } from './create-dto.dto';

export class UpdateTaDto extends PartialType(CreateDto) {}
