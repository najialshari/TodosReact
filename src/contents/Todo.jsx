import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { newTodo, updateTodo } from "../state/actions"


const Todo = () => {

    const [note, setNote] = useState()
    const todoRef = useRef()
    const userRef = useRef()
    const userDispatch = useDispatch()
    const users = useSelector(state => state)

    const handleTodo = () => {
        const regex = /^$/

        if ((regex.test(userRef.current.value) === true) || (regex.test(todoRef.current.value) === true))
            setNote('* Username and Todo should not be empty')

        else {

            // Here we use findIndex because it search objects property not indexOf which search values
            //return -1 if not existed or index if existed

            const indexUser = users.findIndex((obj) => obj.username === userRef.current.value.toUpperCase())

            if (indexUser === -1)
                userDispatch(newTodo(userRef.current.value.toUpperCase(), todoRef.current.value))

            else
                userDispatch(updateTodo(indexUser, todoRef.current.value))

            setNote('')
            todoRef.current.value = ''
        }

    }

    return (
        <>
            < div className="todo">
                <h1>Users Todos</h1>
                <div className='main'>

                    <input type='text' ref={userRef} placeholder='add new username here ...' />
                    <input type='text' ref={todoRef} placeholder='add his todos here ...' />

                    <input type='button' value='Add user todos' onClick={handleTodo} />

                    <li>{note}</li>
                </div>
            </div>

            <div className="userDetails">
                {users.length !== 0 &&
                    users.map((userObj, j) =>
                        <div key={j} >
                            <Link to={`/Todo/${userObj.username}`} >
                                <h3>User : {userObj.username}</h3>
                                <ul>
                                    {userObj.todo.map((todo, i) => (

                                        <li key={i}><strong>Todo {i + 1}</strong> : {todo}</li>
                                    )
                                    )}
                                </ul>
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Todo
