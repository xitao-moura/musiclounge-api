import { Document } from 'mongoose'

export interface Cidade extends Document {
    uf: string,
    nome: string,
    estado_id: string,
    createdAt: Date,
    updatedAt: Date
}