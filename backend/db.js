/* DB Schema
Todo{
    title: string;
    description: string;
    isDone: boolean;
    createdAt: datetime;
    updatedAt: dateTime;
    deleteAt: datetime; 
}
*/

const mongoose = require(mongoose);
const DBCONNECTION = "mongodb+srv://mongouser:mongouser12345@cluster0.vitelbk.mongodb.net/";
mongoose.connect(DBCONNECTION);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean,
    createdAt: Date,
    updatedAt: Date,
    deleteAt: Date,
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
