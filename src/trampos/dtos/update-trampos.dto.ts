import { ApiProperty } from '@nestjs/swagger';

export class UpdateTrampoDto {
    @ApiProperty()
    tipo: string
    @ApiProperty()
    nivel: string
    @ApiProperty()
    sexo: string
    @ApiProperty()
    valor: number
    @ApiProperty()
    descricao: string
    @ApiProperty()
    interesados: string[]
    @ApiProperty()
    fechado: string
    @ApiProperty()
    status: string
    updatedAt: Date
}