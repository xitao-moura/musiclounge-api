import { ApiProperty } from '@nestjs/swagger';

export class CreateTipoDto {
    @ApiProperty()
    nome: string
    createdAt: Date
    updatedAt: Date
}