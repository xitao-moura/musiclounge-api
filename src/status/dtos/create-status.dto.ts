import { ApiProperty } from '@nestjs/swagger';
import { Tipo } from 'src/tipos/interfaces/tipos.interface';

export class CreateStatusDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    createdAt: Date
    updatedAt: Date
}