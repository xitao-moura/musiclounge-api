import { ApiProperty } from '@nestjs/swagger';

export class CreateEstadoDto {
    @ApiProperty()
    uf: string
    @ApiProperty()
    nome: string
    createdAt: Date
    updatedAt: Date
}