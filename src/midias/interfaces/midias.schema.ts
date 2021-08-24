import * as mongoose from 'mongoose';

export const MidiaSchema = new mongoose.Schema({
    user: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    tipo: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Tipo'
    },
    midia: {
        type: String,
        required: true
    },
    status: {
        type: [mongoose.Schema.Types.ObjectId],
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
}, { timestamps: true, collection: 'midias' });