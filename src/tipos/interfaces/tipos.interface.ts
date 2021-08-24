import { Document } from 'mongoose'

export interface Tipo extends Document {
    nome: string,
    createdAt: Date,
    updatedAt: Date
}