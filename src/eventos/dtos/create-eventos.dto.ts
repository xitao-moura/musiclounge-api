import { ApiProperty } from '@nestjs/swagger';

export class CreateEventoDto {
    @ApiProperty()
    titulo: string
    @ApiProperty()
    local: string
    @ApiProperty()
    rua: string
    @ApiProperty()
    num: string
    @ApiProperty()
    complemento: string
    @ApiProperty()
    bairro: string
    @ApiProperty()
    cep: number
    @ApiProperty()
    cidade: string
    @ApiProperty()
    estado: string
    @ApiProperty()
    data_inicio: Date
    @ApiProperty()
    data_final: Date
    @ApiProperty()
    descricao: string
    @ApiProperty()
    latitude: string
    @ApiProperty()
    longitude: string
    createdAt: Date
    updatedAt: Date
}