import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateEstadoDto } from './dtos/create-estados.dto';
import { UpdateEstadoDto } from './dtos/update-estados.dto'
import { EstadosService } from './estados.service';
import { Estado } from './interfaces/estados.interface';

@Controller('v1/estados')
export class EstadosController {

    private readonly logger = new Logger(EstadosController.name);

    constructor(private readonly estadosService: EstadosService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async criarEstado(
        @Body() createEstadoDto: CreateEstadoDto
    ): Promise<Estado>{
        return await this.estadosService.criarEstado(createEstadoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarEstado(): Promise<Estado[]> {
        return await this.estadosService.consultarTodosEstado();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:_id')
    async consultarEstadoKey(@Param('_id') _id: string): Promise<Estado[] | Estado> {
        return await this.estadosService.consultarEstadoKey(_id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:_id')
    async atualizarEstado(
        @Body() updateEstadoDto: UpdateEstadoDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateEstadoDto: ${JSON.stringify(updateEstadoDto)}`);
        await this.estadosService.atualizarEstado(_id,updateEstadoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:_id')
    async deletarEstado(
        @Param('_id') _id: string): Promise<void>{
        this.estadosService.deletarEstado(_id)
    }

}