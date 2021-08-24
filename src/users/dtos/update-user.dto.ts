import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty()
    avatar: string
    @ApiProperty()
    nome: string
    @ApiProperty()
    email: string
    @ApiProperty()
    password: string
    @ApiProperty()
    tipo: string
    @ApiProperty()
    status: string
    @ApiProperty()
    cidade: string
    @ApiProperty()
    estado: string
    @ApiProperty()
    rua: string
    @ApiProperty()
    num: string
    @ApiProperty()
    bairro: string
    @ApiProperty()
    latitude: string
    @ApiProperty()
    longitude: string
    @ApiProperty()
    celular: string
    @ApiProperty()
    roles: string[]
    @ApiProperty()
    sobre: string
    updatedAt: Date
}