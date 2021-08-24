import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateCidadeDto } from './dtos/create-cidades.dto'
import { UpdateCidadeDto } from './dtos/update-cidades.dto'
import { Cidade } from './interfaces/cidades.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class CidadesService {

    constructor(
        @InjectModel('Cidade') private readonly cidadesModel: Model<Cidade>
    ) {}

    private readonly logger = new Logger(CidadesService.name);

    async criarCidade(createCidadeDto: CreateCidadeDto): Promise<any> {
        const cidadeCriado = new this.cidadesModel(createCidadeDto)
        cidadeCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarCidade(_id: string, updateCidadeDto: UpdateCidadeDto): Promise<Cidade> {
        const cidadeCriado = await this.cidadesModel.findOne({_id}).exec()
        if(!cidadeCriado){
            throw new BadRequestException(`Cidade com o _id ${_id} não encontrado`)
        }
        return await this.cidadesModel.findOneAndUpdate({_id: _id},{$set: updateCidadeDto}).exec()
    }

    async consultarTodosCidade(): Promise<Cidade[]> {
        return await this.cidadesModel.find().exec()
    }

    async consultarCidadeKey(_id: string): Promise<Cidade> {
        const cidadeCriado = await this.cidadesModel.findOne({_id}).exec()
        if(!cidadeCriado){
            throw new BadRequestException(`Cidade com o _id ${_id} não encontrado`)
        }
        return await this.cidadesModel.findOne({_id}).exec()
    }

    async deletarCidade(_id: string): Promise<any> {
        const cidadeCriado = await this.cidadesModel.findOne({_id}).exec()
        if(!cidadeCriado){
            throw new BadRequestException(`Cidade com o _id ${_id} não encontrado`)
        }
        await this.cidadesModel.deleteOne({_id}).exec()
    }

}