import { Document } from 'mongoose'

export interface Estado extends Document {
    uf: string,
    nome: string,
    createdAt: Date,
    updatedAt: Date
}