import * as mongoose from 'mongoose';

export const ConfigUserSchema = new mongoose.Schema({
    notificacao_dna: {
        type: String,
        required: true
    },
    notificacao_eventos: {
        type: Date, 
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, { timestamps: true, collection: 'config_users' });