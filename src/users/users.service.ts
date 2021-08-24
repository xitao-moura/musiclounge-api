import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { User } from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcryptjs'
import { environment } from '../common/environment'

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}

    private readonly logger = new Logger(UsersService.name);

    async criarUser(createUserDto: CreateUserDto): Promise<any> {
        const hash = await bcrypt.hashSync(createUserDto.password, environment.security.saltRounds)
        createUserDto.password = hash
        const userCriado = new this.userModel(createUserDto)
        userCriado.save( (error, doc) => {
            if(error){
                console.log(error)
                return error
            }
            console.log(doc)
            return doc
        })
    }

    async atualizarUser(_id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const userEncontrado = await this.userModel.findOne({_id}).exec()
        if(!userEncontrado){
            throw new BadRequestException(`Usuario com o _id ${_id} não encontrado`)
        }

        //const isMatch = await bcrypt.compare(updateUserDto.password, userEncontrado.password)

        // if(isMatch === false){
        //     const hash = await bcrypt.hash(updateUserDto.password, environment.security.saltRounds)
        //     updateUserDto.password = hash
        // }

        return await this.userModel.findOneAndUpdate({_id: _id},{$set: updateUserDto}).populate('tipo').populate('status').exec()
    }

    async consultarTodosUsers(): Promise<User[]> {
        return await this.userModel.find().populate('tipo').populate('status').exec()
    }

    async consultarUsersKey(_id: string): Promise<User> {
        const vinculoEncontrado = await this.userModel.findOne({_id}).exec()
        if(!vinculoEncontrado){
            throw new BadRequestException(`Usuario com o _id ${_id} não encontrado`)
        }
        return await this.userModel.findOne({_id}).populate('tipo').populate('status').exec()
    }

    async consutarUserEmail(email: string){
        return await this.userModel.findOne({ email }).populate('tipo').populate('status').exec()
    }

    async deletarUser(_id: string): Promise<any> {
        const vinculoEncontrado = await this.userModel.findOne({_id}).exec()
        if(!vinculoEncontrado){
            throw new BadRequestException(`Usuario com o _id ${_id} não encontrado`)
        }
        await this.userModel.deleteOne({_id}).exec()
    }

    async bcrypt(password){
        const saltOrRounds = bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }

}