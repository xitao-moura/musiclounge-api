import { ApiProperty } from '@nestjs/swagger';

export class UpdateTipoDto {
    @ApiProperty()
    nome: string
    updatedAt: Date
}