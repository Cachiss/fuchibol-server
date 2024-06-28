import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario'],
        unique: true,
        trim: true,
    },
    logo: {
        type: String,
        default: 'no-logo.png',
    },
    members: {
        type: [String],
        required: true,
    }
});

export const TeamModel = mongoose.model('Team', TeamSchema);

