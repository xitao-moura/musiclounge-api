import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateConfigUserDto } from './dtos/create-config-user.dto'
import { UpdateConfigUserDto } from './dtos/update-config-user.dto'
import { ConfigUser } from './interfaces/config-user.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ConfigUserService {

    constructor(
        @InjectModel('ConfigUser') private readonly configuserModel: Model<ConfigUser>
    ) {}

    private readonly logger = new Logger(ConfigUserService.name);

    async criarConfigUser(createConfigUserDto: CreateConfigUserDto): Promise<any> {
        const configuserCriado = new this.configuserModel(createConfigUserDto)
        configuserCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarConfigUser(_id: string, updateConfigUserDto: UpdateConfigUserDto): Promise<ConfigUser> {
        const configuserCriado = await this.configuserModel.findOne({_id}).exec()
        if(!configuserCriado){
            throw new BadRequestException(`Config user com o _id ${_id} não encontrado`)
        }
        return await this.configuserModel.findOneAndUpdate({_id: _id},{$set: updateConfigUserDto}).exec()
    }

    async consultarTodosConfigUser(): Promise<ConfigUser[]> {
        return await this.configuserModel.find().exec()
    }

    async consultarConfigUserKey(_id: string): Promise<ConfigUser> {
        const configuserCriado = await this.configuserModel.findOne({_id}).exec()
        if(!configuserCriado){
            throw new BadRequestException(`Config user com o _id ${_id} não encontrado`)
        }
        return await this.configuserModel.findOne({_id}).exec()
    }

    async deletarConfigUser(_id: string): Promise<any> {
        const configuserCriado = await this.configuserModel.findOne({_id}).exec()
        if(!configuserCriado){
            throw new BadRequestException(`Config user com o _id ${_id} não encontrado`)
        }
        await this.configuserModel.deleteOne({_id}).exec()
    }

}