import { ApiProperty } from '@nestjs/swagger';
import { Tipo } from 'src/tipos/interfaces/tipos.interface';

export class UpdateStatusDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    updatedAt: Date
}