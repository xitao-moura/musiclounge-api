import { Document } from 'mongoose'
import { Tipo } from 'src/tipos/interfaces/tipos.interface';

export interface Status extends Document {
    nome: string,
    tipo: string,
    createdAt: Date,
    updatedAt: Date
}