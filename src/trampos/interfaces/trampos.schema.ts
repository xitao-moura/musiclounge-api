import * as mongoose from 'mongoose';

export const TrampoSchema = new mongoose.Schema({
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo'
    },
    nivel: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    interesados: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    fechado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, { timestamps: true, collection: 'trampos' });