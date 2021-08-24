import { Document } from 'mongoose'
import { Role } from '../../common/role.enum'

export interface User extends Document {
    avatar: string,
    nome: string,
    email: string,
    password: string,
    tipo: string,
    status: string,
    cidade: string,
    estado: string,
    rua: string,
    num: string,
    bairro: string,
    latitude: string,
    longitude: string,
    celular: string,
    roles: string[],
    sobre: string,
    createdAt: Date,
    updatedAt: Date,
}