import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    avatar: {
        type: String,
        required: false
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo'
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status'
    },
    cidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cidade'
    },
    estado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado'
    },
    rua: {
        type: String
    },
    num: {
        type: String
    },
    bairro: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    celular: {
        type: String
    },
    roles: {
        type: [String],
        required: true
    },
    sobre: {
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, { timestamps: true, collection: 'users' });