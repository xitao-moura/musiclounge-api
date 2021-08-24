import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateCategoriaDto } from './dtos/create-categorias.dto'
import { UpdateCategoriaDto } from './dtos/update-categorias.dto'
import { Categoria } from './interfaces/categorias.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class CategoriasService {

    constructor(
        @InjectModel('Categoria') private readonly categoriasModel: Model<Categoria>
    ) {}

    private readonly logger = new Logger(CategoriasService.name);

    async criarCategoria(createCategoriaDto: CreateCategoriaDto): Promise<any> {
        const categoriaCriado = new this.categoriasModel(createCategoriaDto)
        categoriaCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarCategoria(_id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
        const categoriaCriado = await this.categoriasModel.findOne({_id}).exec()
        if(!categoriaCriado){
            throw new BadRequestException(`Categoria com o _id ${_id} não encontrado`)
        }
        return await this.categoriasModel.findOneAndUpdate({_id: _id},{$set: updateCategoriaDto}).exec()
    }

    async consultarTodosCategoria(): Promise<Categoria[]> {
        return await this.categoriasModel.find().exec()
    }

    async consultarCategoriaKey(_id: string): Promise<Categoria> {
        const categoriaCriado = await this.categoriasModel.findOne({_id}).exec()
        if(!categoriaCriado){
            throw new BadRequestException(`Categoria com o _id ${_id} não encontrado`)
        }
        return await this.categoriasModel.findOne({_id}).exec()
    }

    async deletarCategoria(_id: string): Promise<any> {
        const categoriaCriado = await this.categoriasModel.findOne({_id}).exec()
        if(!categoriaCriado){
            throw new BadRequestException(`Categoria com o _id ${_id} não encontrado`)
        }
        await this.categoriasModel.deleteOne({_id}).exec()
    }

}