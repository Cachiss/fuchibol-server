import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
    team1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    team2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    team1Score: {
        type: Number,
        required: true,
        default: 0,
    },
    team2Score: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    loser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    draw: {
        type: Boolean,
        default: false,
    }
});