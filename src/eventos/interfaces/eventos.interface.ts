import { Document } from 'mongoose'

export interface Evento extends Document {
    titulo: string,
    local: string,
    rua: string,
    num: string,
    complemento: string,
    bairro: string,
    cep: number,
    cidade: string,
    estado: string,
    data_inicio: Date,
    data_final: Date,
    descricao: string,
    latitude: string,
    longitude: string,
    createdAt: Date,
    updatedAt: Date
}