import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateTipoDto } from './dtos/create-tipos.dto'
import { UpdateTipoDto } from './dtos/update-tipos.dto'
import { Tipo } from './interfaces/tipos.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class TiposService {

    constructor(
        @InjectModel('Tipo') private readonly tiposModel: Model<Tipo>
    ) {}

    private readonly logger = new Logger(TiposService.name);

    async criarTipo(createTipoDto: CreateTipoDto): Promise<any> {
        const tipoCriado = new this.tiposModel(createTipoDto)
        tipoCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarTipo(_id: string, updateTipoDto: UpdateTipoDto): Promise<Tipo> {
        const tipoCriado = await this.tiposModel.findOne({_id}).exec()
        if(!tipoCriado){
            throw new BadRequestException(`Tipo com o _id ${_id} não encontrado`)
        }
        return await this.tiposModel.findOneAndUpdate({_id: _id},{$set: updateTipoDto}).exec()
    }

    async consultarTodosTipo(): Promise<Tipo[]> {
        return await this.tiposModel.find().exec()
    }

    async consultarTipoKey(_id: string): Promise<Tipo> {
        const tipoCriado = await this.tiposModel.findOne({_id}).exec()
        if(!tipoCriado){
            throw new BadRequestException(`Tipo com o _id ${_id} não encontrado`)
        }
        return await this.tiposModel.findOne({_id}).exec()
    }

    async deletarTipo(_id: string): Promise<any> {
        const tipoCriado = await this.tiposModel.findOne({_id}).exec()
        if(!tipoCriado){
            throw new BadRequestException(`Tipo com o _id ${_id} não encontrado`)
        }
        await this.tiposModel.deleteOne({_id}).exec()
    }

}