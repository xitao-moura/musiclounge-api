import { ApiProperty } from '@nestjs/swagger';

export class UpdateCidadeDto {
    @ApiProperty()
    uf: string
    @ApiProperty()
    nome: string
    @ApiProperty()
    estado: string
    updatedAt: Date
}