import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateEstadoDto } from './dtos/create-estados.dto'
import { UpdateEstadoDto } from './dtos/update-estados.dto'
import { Estado } from './interfaces/estados.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class EstadosService {

    constructor(
        @InjectModel('Estado') private readonly estadosModel: Model<Estado>
    ) {}

    private readonly logger = new Logger(EstadosService.name);

    async criarEstado(createEstadoDto: CreateEstadoDto): Promise<any> {
        const estadoCriado = new this.estadosModel(createEstadoDto)
        estadoCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarEstado(_id: string, updateEstadoDto: UpdateEstadoDto): Promise<Estado> {
        const estadoCriado = await this.estadosModel.findOne({_id}).exec()
        if(!estadoCriado){
            throw new BadRequestException(`Estado com o _id ${_id} não encontrado`)
        }
        return await this.estadosModel.findOneAndUpdate({_id: _id},{$set: updateEstadoDto}).exec()
    }

    async consultarTodosEstado(): Promise<Estado[]> {
        return await this.estadosModel.find().exec()
    }

    async consultarEstadoKey(_id: string): Promise<Estado> {
        const estadoCriado = await this.estadosModel.findOne({_id}).exec()
        if(!estadoCriado){
            throw new BadRequestException(`Estado com o _id ${_id} não encontrado`)
        }
        return await this.estadosModel.findOne({_id}).exec()
    }

    async deletarEstado(_id: string): Promise<any> {
        const estadoCriado = await this.estadosModel.findOne({_id}).exec()
        if(!estadoCriado){
            throw new BadRequestException(`Estado com o _id ${_id} não encontrado`)
        }
        await this.estadosModel.deleteOne({_id}).exec()
    }

}