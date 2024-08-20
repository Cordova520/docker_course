const { text } = require('body-parser');
const mongoose = require('mongoose');
const { default: test } = require('node:test');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    text: String
});

const GoalModel = mongoose.model('Goal', goalSchema);

module.exports = GoalModel;