import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    firstname: {
        type: String,
        min: 1,
        max: 24,
    },

    lastname: {
        type: String,
        min: 1,
        max: 10,
    },

    email: {
        type: String,
        unique: [true, 'Email already exists.'],
        required: [true, 'Email must be required.']
    },

    desc: {
        type: String,
    },

    avatarUrl: {
        type: String,
        required: [true, 'AvatarUrl must be required.']
    },

    githubUrl: {
        type: String,
    },

    linkedUrl: {
        type: String,
    },
});

export const User = models['User'] || model('User', UserSchema);

export default User;