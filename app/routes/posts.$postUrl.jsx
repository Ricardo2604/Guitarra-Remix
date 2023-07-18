import { useLoaderData } from '@remix-run/react'
import { getPost } from '../models/posts.server'
import {formatearFecha} from '../utils/helpers'

export async function loader({ params}) {
  const { postUrl } = params
  const post = await getPost(postUrl)
  
  return post
 
};


export function meta({data}) {
  
  return[{
  title: `Guitarra - ${data.data[0].attributes.titulo}`,
  description: `Guitarras,  Ventas de guitarras, guitarra ${data.data[0].attributes.titulo}`
  }
  ]
}


export default function Post() {
  const post = useLoaderData()
  const {titulo, imagen, contenido, publishedAt} = post.data[0].attributes
  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha" > {formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
            
        </div>

    </article>
  )
}

