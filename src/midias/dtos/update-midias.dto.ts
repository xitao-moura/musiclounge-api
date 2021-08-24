import { ApiProperty } from '@nestjs/swagger';

export class UpdateMidiaDto {
    @ApiProperty()
    user: string
    @ApiProperty()
    tipo: string
    @ApiProperty()
    midia: string
    @ApiProperty()
    status: string
    updatedAt: Date
}