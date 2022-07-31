import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../state/actions"



const TodoDetails = () => {

    const { userDetails } = useParams()
    const users = useSelector((state) => state)
    const indexUser = users.findIndex((user) => user.username === userDetails)
    const deleteDispatch = useDispatch()

    const handleDelete = (indexTodo) => {
        deleteDispatch(deleteTodo(userDetails, indexTodo))
    }

    return (
        <>
            <h3>All {userDetails} Todos</h3>

            <div className="details">
                <Link to={'/'}>Back</Link>
                <ul>
                    {users[indexUser].todo.length !== 0 ?
                        users[indexUser].todo.map((todo, i) => (
                            <div key={i}>
                                <li ><strong>Todo{i + 1}</strong> : {todo}</li>
                                <div onClick={() => handleDelete(i)}>Delete</div>
                            </div>
                        )
                        )
                        :
                        <p>No more Todos. To Add new <Link to={'/'} >Click here</Link></p>
                    }
                </ul>
            </div>

        </>
    )
}

export default TodoDetails