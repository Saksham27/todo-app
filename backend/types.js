const zod = require('zod');

// schema for creating todo
const CreateTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});


// schema for mark todo done
const markDone = zod.string().uuid();

module.exports = {
    createTodo : this.createTodo,
    markTodoDone : markDone
}