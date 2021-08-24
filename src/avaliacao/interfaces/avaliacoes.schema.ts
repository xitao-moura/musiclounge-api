import * as mongoose from 'mongoose';

export const AvaliacaoSchema = new mongoose.Schema({
    avaliador: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    avaliado: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    avaliacao: {
        type: Number,
        required: true
    },
    trampo: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Trampo'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, { timestamps: true, collection: 'avaliacoes' });