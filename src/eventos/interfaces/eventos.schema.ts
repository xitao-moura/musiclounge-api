import * as mongoose from 'mongoose';

export const EventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    num: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    cidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cidade'
    },
    estado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado'
    },
    data_inicio: {
        type: String,
        required: true
    },
    data_final: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, { timestamps: true, collection: 'eventos' });