import * as mongoose from 'mongoose';

export const StatusSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, { timestamps: true, collection: 'status' });