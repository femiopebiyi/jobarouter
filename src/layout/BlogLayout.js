import { Link, Outlet } from "react-router-dom"

export default function BlogLayout() {
    return (
        <div className="blog-layout">
        <h2>Our Blogs</h2>
        
        <Outlet/>
        </div>
    )
}