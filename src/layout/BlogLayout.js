import { Link, Outlet } from "react-router-dom"

export default function BlogLayout() {
    return (
        <div className="blog-layout">
        <h2>Blog</h2>
        <p>This is our blog page</p>
        <Link to= 'blogpost'>click to show blog</Link>
        
        <Outlet />
        </div>
    )
}