const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb://localhost:27017/todo")

const todoSchema = mongoose.Schema({
    title :String,
    desciption : String,
    completed : Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}