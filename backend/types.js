const zod = require('zod');

// schema for creating todo
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});


// schema for mark todo done
const markDoneOrDelete = zod.string();

module.exports = {
    createTodo : createTodo,
    markDoneOrDelete : markDoneOrDelete
}