import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstadoDto {
    @ApiProperty()
    uf: string
    @ApiProperty()
    nome: string
    updatedAt: Date
}