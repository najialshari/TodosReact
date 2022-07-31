import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(data => setPosts(data))
            .catch('error')
// eslint-disable-next-line 
    }, [])


    return (

        <div>
            <h2>All the posts</h2>
            {posts && posts.map((post, i) => (
                <div className="main" key={i}>
                    <Link to={`/posts/${post.id}`}>Post ID : {post.id} </Link><br/>
                    <label>Post Title : {post.title}</label>
                </div>
            )
            )
            }
        </div>
    )
}
export default Posts