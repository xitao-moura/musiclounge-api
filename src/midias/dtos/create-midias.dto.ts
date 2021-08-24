import { ApiProperty } from '@nestjs/swagger';

export class CreateMidiaDto {
    @ApiProperty()
    user: string
    @ApiProperty()
    tipo: string
    @ApiProperty()
    midia: string
    @ApiProperty()
    status: string
    createdAt: Date
    updatedAt: Date
}