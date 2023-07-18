import { useState, useEffect } from 'react'
import{
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'


export function meta(){
    return[
        {
            charset: 'utf-8',
            title:'Guitarra, Remix by Ricardo',
            viewport: "width=device-width,initial-scale=1"
        }
    ]   
}


export function links(){
    return [
        {
            rel:'stylesheet',
            href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel:'preconnect',
            href:'https://fonts.googleapis.com'

        },
        {
            rel:'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        }
    ]
}

export default function App() {
    
    const carritoLS = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito',  JSON.stringify(carrito))
    },[carrito])
    
    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            
            const carritoActualizado = carrito.map( guitarraState =>{
                if (guitarraState.id === guitarra.id){
                    //reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        }else{
            //Nuevo registro
            setCarrito([...carrito, guitarra])
        }
    }

    const actuatualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState

        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoAtualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoAtualizado)
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito, 
                    actuatualizarCantidad,
                    eliminarGuitarra
                }}            
            />
        </Document>
    )
}

function Document({children}) {
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
                
            <body>
                <Header/>
                { children }
                <Footer/>


                <Scripts/>
                <LiveReload/>
            </body>


        </html>
    )
}

/**manejo de  errores */
