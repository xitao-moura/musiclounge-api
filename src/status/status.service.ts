import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateStatusDto } from './dtos/create-status.dto'
import { UpdateStatusDto } from './dtos/update-status.dto'
import { Status } from './interfaces/status.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class StatusService {

    constructor(
        @InjectModel('Status') private readonly statusModel: Model<Status>
    ) {}

    private readonly logger = new Logger(StatusService.name);

    async criarStatus(createStatusDto: CreateStatusDto): Promise<any> {
        const vinculoCriado = new this.statusModel(createStatusDto)
        vinculoCriado.save( (error, doc) => {
            if(error){
                console.log(error)
                return error
            }
            console.log(doc)
            return doc
        })
    }

    async atualizarStatus(_id: string, updateStatusDto: UpdateStatusDto): Promise<Status> {
        const statusEncontrado = await this.statusModel.findOne({_id}).exec()
        if(!statusEncontrado){
            throw new BadRequestException(`Status com o _id ${_id} não encontrado`)
        }
        return await this.statusModel.findOneAndUpdate({_id: _id},{$set: updateStatusDto}).exec()
    }

    async consultarTodosStatus(): Promise<Status[]> {
        return await this.statusModel.find().exec()
    }

    async consultarStatusKey(_id: string): Promise<Status> {
        const statusEncontrado = await this.statusModel.findOne({_id}).exec()
        if(!statusEncontrado){
            throw new BadRequestException(`Status com o _id ${_id} não encontrado`)
        }
        return await this.statusModel.findOne({_id}).exec()
    }

    async deletarStatus(_id: string): Promise<any> {
        const statusEncontrado = await this.statusModel.findOne({_id}).exec()
        if(!statusEncontrado){
            throw new BadRequestException(`Status com o _id ${_id} não encontrado`)
        }
        await this.statusModel.deleteOne({_id}).exec()
    }

}