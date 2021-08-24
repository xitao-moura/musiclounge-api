import { ApiProperty } from '@nestjs/swagger';

export class CreateCidadeDto {
    @ApiProperty()
    uf: string
    @ApiProperty()
    nome: string
    @ApiProperty()
    estado: string
    createdAt: Date
    updatedAt: Date
}