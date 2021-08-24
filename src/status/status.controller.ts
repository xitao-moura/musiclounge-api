import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateStatusDto } from './dtos/create-status.dto';
import { UpdateStatusDto } from './dtos/update-status.dto'
import { StatusService } from './status.service';
import { Status } from './interfaces/status.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/status')
export class StatusController {

    private readonly logger = new Logger(StatusController.name);

    constructor(private readonly statusService: StatusService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async criarStatus(
        @Body() createStatusDto: CreateStatusDto
    ): Promise<Status>{
        return await this.statusService.criarStatus(createStatusDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarStatus(): Promise<Status[]> {
        return await this.statusService.consultarTodosStatus();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:_id')
    async consultarStatusKey(@Param('_id') _id: string): Promise<Status[] | Status> {
        return await this.statusService.consultarStatusKey(_id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:_id')
    async atualizarStatus(
        @Body() updateStatusDto: UpdateStatusDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateStatusDto: ${JSON.stringify(updateStatusDto)}`);
        await this.statusService.atualizarStatus(_id,updateStatusDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:_id')
    async deletarStatus(
        @Param('_id') _id: string): Promise<void>{
        this.statusService.deletarStatus(_id)
    }

}