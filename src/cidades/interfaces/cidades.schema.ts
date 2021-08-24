import * as mongoose from 'mongoose';

export const CidadeSchema = new mongoose.Schema({
    uf: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    estado_id: {
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
}, { timestamps: true, collection: 'cidades' });