import { ApiProperty } from '@nestjs/swagger';

export class CreateAvaliacaoDto {
    @ApiProperty()
    avaliador: string
    @ApiProperty()
    avaliado: string
    @ApiProperty()
    avaliacao: number
    @ApiProperty()
    trampo: string
    createdAt: Date
    updatedAt: Date
}