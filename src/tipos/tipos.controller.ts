import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateTipoDto } from './dtos/create-tipos.dto';
import { UpdateTipoDto } from './dtos/update-tipos.dto'
import { TiposService } from './tipos.service';
import { Tipo } from './interfaces/tipos.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/tipos')
export class TiposController {

    private readonly logger = new Logger(TiposController.name);

    constructor(private readonly tiposService: TiposService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async criarTipo(
        @Body() createTipoDto: CreateTipoDto
    ): Promise<Tipo>{
        return await this.tiposService.criarTipo(createTipoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarTipo(): Promise<Tipo[]> {
        return await this.tiposService.consultarTodosTipo();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:_id')
    async consultarTipoKey(@Param('_id') _id: string): Promise<Tipo[] | Tipo> {
        return await this.tiposService.consultarTipoKey(_id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:_id')
    async atualizarTipo(
        @Body() updateTipoDto: UpdateTipoDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateTipoDto: ${JSON.stringify(updateTipoDto)}`);
        await this.tiposService.atualizarTipo(_id,updateTipoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:_id')
    async deletarTipo(
        @Param('_id') _id: string): Promise<void>{
        this.tiposService.deletarTipo(_id)
    }

}