import { Outlet } from "@remix-run/react"
import blogCss from "../styles/blog.css"

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: blogCss
    }
  ]
}

   
function Blog() {
  return (
    <main className="contenedor">
      <Outlet/>     
    </main>
  )
}

export default Blog
