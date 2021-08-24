import { Document } from 'mongoose'

export interface Trampo extends Document {
    tipo: string,
    nivel: string,
    valor: number,
    descricao: string,
    interesados: string[],
    fechado: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
}