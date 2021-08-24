import { ApiProperty } from '@nestjs/swagger';

export class UpdateConfigUserDto {
    @ApiProperty()
    notificacao_dna: number
    @ApiProperty()
    notificacao_eventos: number
    @ApiProperty()
    user: string
    updatedAt: Date
}