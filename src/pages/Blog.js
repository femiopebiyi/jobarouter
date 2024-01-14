import { useLoaderData, Link } from "react-router-dom"
import { posts } from "../blog"


export default function Blog(){

    return <div className="blog">
        {posts.map((post)=>{
    return <div key={post.id}>
                <h1>{post.title}</h1>
                <br/>
                <h2>{post.body}</h2>
                <p>Author: {post.author}</p>
            </div>
        })}
    </div>
}



