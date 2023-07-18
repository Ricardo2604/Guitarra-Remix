import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/posts.server"
import ListadoPost from "../components/listado-post-index"

export function meta({data}) {
   
  return[{
  title: `Guitarra - Nuestro Blog`,
  description: `Guitarras - Blog de musica y ventas de guitarras`
  }
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}
    
  function Blog() {
  const posts =  useLoaderData()
  

  return (
      <ListadoPost
        posts={posts}
      />   
  )
}

export default Blog
