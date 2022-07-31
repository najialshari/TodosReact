import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Post = () => {
    const { postid } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then(responce => responce.json())
            .then(data => setPosts(data))
            .catch('error')
// eslint-disable-next-line 
    }, [])

    return (
        <>
            <h1>This is Post {postid} details:</h1>
            {posts && 
            // posts.map((post, i) => (
                <div className="main">
                    <li>Post ID : {posts.id} </li><br/>
                    <li>Post Title : {posts.title}</li><br/>
                    <li>Post Body : {posts.body}</li>

                </div>
            // )
            // )
            }
        </>
    )


}
export default Post