import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateConfigUserDto } from './dtos/create-config-user.dto';
import { UpdateConfigUserDto } from './dtos/update-config-user.dto'
import { ConfigUserService } from './config-user.service';
import { ConfigUser } from './interfaces/config-user.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/config-user')
export class ConfigUserController {

    private readonly logger = new Logger(ConfigUserController.name);

    constructor(private readonly configUserService: ConfigUserService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async criarConfigUser(
        @Body() createTipoDto: CreateConfigUserDto
    ): Promise<ConfigUser>{
        return await this.configUserService.criarConfigUser(createTipoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarConfigUser(): Promise<ConfigUser[]> {
        return await this.configUserService.consultarTodosConfigUser();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:_id')
    async consultarConfigUserKey(@Param('_id') _id: string): Promise<ConfigUser[] | ConfigUser> {
        return await this.configUserService.consultarConfigUserKey(_id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:_id')
    async atualizarConfigUser(
        @Body() updateTipoDto: UpdateConfigUserDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateTipoDto: ${JSON.stringify(updateTipoDto)}`);
        await this.configUserService.atualizarConfigUser(_id,updateTipoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:_id')
    async deletarConfigUser(
        @Param('_id') _id: string): Promise<void>{
        this.configUserService.deletarConfigUser(_id)
    }

}