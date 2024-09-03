/**
 * Created by Syed Afzal
 */
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    _id: mongoose.Schema.Types.ObjectId,
    text : {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = {Todo};
