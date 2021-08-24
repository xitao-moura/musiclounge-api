import { Document } from 'mongoose'

export interface Avaliacao extends Document {
    avaliador: string,
    avaliado: string,
    avaliacao: number,
    trampo: string,
    createdAt: Date,
    updatedAt: Date
}