import { Document } from 'mongoose'

export interface Midia extends Document {
    user: string,
    tipo: string,
    midia: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
}