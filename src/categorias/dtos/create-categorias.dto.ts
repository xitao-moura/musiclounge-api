import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: string
    createdAt: Date
    updatedAt: Date
}