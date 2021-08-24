import * as mongoose from 'mongoose';

export const EstadoSchema = new mongoose.Schema({
    uf: {
        type: String,
        required: true
    },
    nome: {
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
}, { timestamps: true, collection: 'estados' });