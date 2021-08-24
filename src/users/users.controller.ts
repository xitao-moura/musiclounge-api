import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto'
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/common/roles.decorator';
import { Role } from 'src/common/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('v1/users')
export class UsersController {

    private readonly logger = new Logger(UsersController.name);

    constructor(private readonly usuariosService: UsersService) {}

    //@UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    @Post()
    async criarUser(
        @Body() createUserDto: CreateUserDto,
        @UploadedFile() file: Express.Multer.File
    ): Promise<User>{
        console.log(file.buffer.toString())
        return await this.usuariosService.criarUser(createUserDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarUsers(): Promise<User[]> {
        return await this.usuariosService.consultarTodosUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:_id')
    async consultarUsersKey(@Param('_id') _id: string): Promise<User[] | User> {
        return await this.usuariosService.consultarUsersKey(_id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:_id')
    async atualizarUser(
        @Body() updateUserDto: UpdateUserDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateUserDto: ${JSON.stringify(updateUserDto)}`);
        await this.usuariosService.atualizarUser(_id,updateUserDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:_id')
    async deletarUser(
        @Param('_id') _id: string): Promise<void>{
        this.usuariosService.deletarUser(_id)
    }

}