import { ApiProperty } from '@nestjs/swagger';

export class CreateConfigUserDto {
    @ApiProperty()
    notificacao_dna: number
    @ApiProperty()
    notificacao_eventos: number
    @ApiProperty()
    user: string
    createdAt: Date
    updatedAt: Date
}