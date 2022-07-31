

export const newTodo = (newUsername, newTodo) => ({
type: 'NEW_TODO',
payload : { username: newUsername, todo: newTodo}
})

export const updateTodo = (indexUser, updateTodo) => ({
type: 'UPDATE_TODO',
payload : { index: indexUser, todo: updateTodo }
})

export const deleteTodo = (userName, indexTodo) => ({
type: 'DELETE_TODO',
payload : { username: userName, indextodo: indexTodo}
})
