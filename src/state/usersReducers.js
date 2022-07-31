
const initState = []

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        
        case 'NEW_TODO':

            return [...state, { username: action.payload.username, todo: [action.payload.todo] }]

        case 'UPDATE_TODO': {

            state[action.payload.index].todo.push(action.payload.todo)

            return [...state]
        }

        case 'DELETE_TODO': {

            const userNameIndex = state.findIndex((userIndex) => (userIndex.username === action.payload.username))
            state[userNameIndex].todo.splice(action.payload.indextodo, 1)

            return [...state]
        }

        default: return state
    }

}
export default usersReducer