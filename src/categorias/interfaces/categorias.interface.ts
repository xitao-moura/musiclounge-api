import { Document } from 'mongoose'

export interface Categoria extends Document {
    nome: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
}