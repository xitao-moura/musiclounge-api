import { Document } from 'mongoose'

export interface ConfigUser extends Document {
    notificacao_dna: number,
    notificacao_eventos: number,
    user: string,
    createdAt: Date,
    updatedAt: Date
}