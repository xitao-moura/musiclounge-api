import { ApiProperty } from '@nestjs/swagger';

export class UpdateAvaliacaoDto {
    @ApiProperty()
    avaliador: string
    @ApiProperty()
    avaliado: string
    @ApiProperty()
    avaliacao: number
    @ApiProperty()
    trampo: string
    updatedAt: Date
}