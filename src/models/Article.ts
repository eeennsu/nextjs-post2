import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema({
    createdBy: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },

    title: {
        type: String,
        required: [true, 'Title must be required.'],
        min: 3,
        max: 40,
    },

    description: {
        type: String,
        max: 500,
        required: [true, 'Description must be required.'],
    },

    image: {
        type: String,
        required: [true, 'Image must be required.'],
    },

    liveSiteUrl: {
        type: String,
        required: [true, 'LiveSiteUrl must be required.'],
    },

    githubUrl: {
        type: String,
        required: [true, 'GithubUrl must be required.'],
    },

    category: {
        type: String,
        required: [true, 'Category must be required.'],
    },

});

export const Article = models['Article'] || model('Article', ArticleSchema);

export default Article;