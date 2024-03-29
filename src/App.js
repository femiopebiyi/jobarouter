import { createBrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom"


//pages 

import Home from "./pages/Home"
import About from "./pages/About"
import RootLayout from "./layout/RootLayout"
import HelpLayout from "./layout/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"
import NotFound from "./pages/NotFound"
import { careersLoader } from "./pages/Careers"
import Careers from "./pages/Careers"
import CareersLayout from "./layout/CareersLayout"
import Blog, { blogLoader } from "./pages/Blog"
import BlogLayout from "./layout/BlogLayout"
import CareerDetails, { careersDetailsLoader } from "./pages/CareerDetails"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element ={<Home/>}/>
        <Route path="about" element ={<About/>}/>
        <Route path="help" element= {<HelpLayout/>}>
          <Route path="faq" element= {<Faq/>}/>
          <Route path="contact" element= {<Contact/>}/>
        </Route>


        <Route path="careers" element={<CareersLayout/>}>
          <Route index element={<Careers/>} loader={careersLoader}/>

          <Route path=":id" element={<CareerDetails/>} loader={careersDetailsLoader}/>
        </Route>

        <Route path="blog" element={<BlogLayout/>}>
          <Route index element={<Blog/>}/>
        </Route>

        <Route path="*" element = {<NotFound/>}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
