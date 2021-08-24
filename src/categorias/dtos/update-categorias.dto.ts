import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoriaDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: string
    updatedAt: Date
}